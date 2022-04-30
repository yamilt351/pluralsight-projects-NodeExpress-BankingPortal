const fs = require("fs");
const path = require("path");

const accountData = fs.readFileSync(
  path.join(__dirname, "json", "accounts.json"),
  "UTF8"
);

const accounts = JSON.parse(accountData);

module.exports.accounts=accounts;

const userData = fs.readFileSync(
  path.join(__dirname, "json", "users.json"),
  "UTF8"
);

const users = JSON.parse(userData);

exports.users=users;

 const writeJSON= ()=> {
  const accountsJSON = JSON.stringify(accounts, null, 4);
 fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON, 
    "utf8" 
    );

}
  exports.writeJSON=writeJSON;
