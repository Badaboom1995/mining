const axios = require('axios');
const Agenda = require('agenda');
const mongoose = require('mongoose');
const mongoConnectionString = 'mongodb://delphit:m12345zxcv@ds251277.mlab.com:51277/cardholder';
const agenda = new Agenda({ db: { address: mongoConnectionString } });
mongoose.connect(mongoConnectionString);

const InvestmentSchema = new mongoose.Schema({
  user: String,
  currency: {
    type: String,
    enum: ['bitcoin', 'advcash'],
    default: 'advcash',
  },
  type: {
    type: String,
    enum: ['mining', 'pool'],
  },
  miningBuild: {
    type: String,
    enum: ['1', '2'],
  },
  balance: Number,
  payed: { type: Boolean, default: false },
  address: String,
  createdAt: { type: Date, default: Date.now },
});
const InvestmentsModel = mongoose.model('investments', InvestmentSchema);
let investments = [];
InvestmentsModel.find({}, (err, items) => {
  console.log(items);
  investments.push(items);
}).lean();

agenda.define('send success payment request', () => {
  console.log('hello, nigga', investments[0]._id);
  if (investments) {
    const data = {
      ac_amount: investments[0].amount,
      ac_merchant_amount: investments[0].amount + 0.5,
      ac_merchant_currency: 'USD',
      ac_start_date: investments[0]._id,
      ac_order_id: investments[0]._id,
      ac_transaction_status: 'success',
      user_id: investments[0].user,
      investment_type: investments[0].type,
    };
    return axios
      .post('http://localhost:3000/investment/pay/notify', data)
      .then(() => {
        console.log('Message has been sent');
        investments.shift();
      })
      .catch(err => {
        console.log(err.response.data.errors);
      });
  }
});

agenda.on('ready', () => {
  agenda.every('25 seconds', 'send success payment request');
  agenda.start();
});
