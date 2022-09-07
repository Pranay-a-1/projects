const Account = require("./src/Account.js");
const Statement = require('./src/Statement');


const testAccount = new Account("clientAccountIDHere");

testAccount.credit(1000, "10/01/2012");
testAccount.credit(2000, "13/01/2012");
testAccount.debit(500, "14/01/2012");


let testStatement = new Statement(testAccount);
testStatement.print();

