const Statement = require("../src/Statement.js");
const Account = require('../src/Account.js');

describe(`Statement tests`, () => {
    let testDebitAmount = 500;
    let testCreditAmount = 1000;
    let testDate = "14/01/2012";

    let testClientAccountID = 'clientAccountIDHere';

    let testAccount;

    describe(`Statement - print() tests`, () => {
        beforeEach(() => {
            testAccount = new Account(testClientAccountID);
            testStatement = new Statement(testAccount);

        });

        afterEach(() => {
            testAccount = null;
            testStatement = null;
        });

        it(`Check if print() is called.`, () => {

            //Arrange
            testAccount.credit(testCreditAmount, testDate);
            testAccount.credit(testCreditAmount, testDate);
            testAccount.debit(testDebitAmount, testDate);
            //Act
            spy = spyOn(testStatement, 'print');
            testStatement.print();
            //Assert

            expect(spy).toHaveBeenCalled();
        });


    });


});