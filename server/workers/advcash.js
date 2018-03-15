const axios = require('axios');
const CronJob = require('cron').CronJob;

console.log('Running a task every 25 sec');
new CronJob('*/25 * * * * *', () => {
  axios.post('http://localhost:3000/investment/pay/notify')
    .then((e) => {
      console.log('Message has been sent')
    })
    .catch((e) => {
      console.log(`Error ${e}`)
    })

} , null, true, 'America/Los_Angeles');
