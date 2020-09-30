const plaid = require('./index').Client;
const environments = require('./index').environments;
const fs = require('fs');

const CLIENT_ID = '5ec4123eba7c950013a7e35c';
const SECRET = '7edaf4dc444ded372afd2a9b3314bb';

const pc = new plaid({
  clientID: CLIENT_ID,
  secret: SECRET,
  env: environments.sandbox,
  options: {
    version: '2020-09-14',
  },
});

const resp = pc.getAssetReportPdf("assets-sandbox-791e1737-f198-480b-b343-f3b0babbe5e8").then((data) => {
  fs.writeFile(`meow.pdf`, data, console.log);
}).catch((err) => {
  console.log(err);
})


