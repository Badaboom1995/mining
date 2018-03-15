const axios = require('axios');
const Agenda = require('agenda');
const mongoose = require('mongoose');
const mongoConnectionString = 'mongodb://delphit:m12345zxcv@ds251277.mlab.com:51277/cardholder';
const agenda = new Agenda({db: {address: mongoConnectionString}});
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
InvestmentsModel.find({}, (err, items) => investments.push(items)).lean();

agenda.define('send success payment request', () => {
  return axios
    .post('http://localhost:3000/investment/pay/notify')
    .then(() => {
      console.log('Message has been sent');
    })
    .catch(e => {
      console.log(`Error ${e}`);
    });
});

agenda.on('ready', () => {
  agenda.every('25 seconds', 'send success payment request');
  agenda.start();
});
