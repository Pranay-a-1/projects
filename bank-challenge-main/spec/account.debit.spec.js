const Account = require('../src/Account.js');

describe(`Account tests`, () => {
    let testDebitAmount = 500;


    let testCreditAmount = 1000;

    let testDate = "14/01/2012";

    let transactionsObject = null;

    let testClientAccountID = 'clientAccountIDHere';

    let testAccount, testTransaction, transactionType2Spy;

    describe('Account class - debit() tests', () => {

        beforeEach(() => {
            testAccount = new Account(testClientAccountID);
            TransactionSpy = spyOn(testAccount.transactionsObject, `createAndInsert`);
        });

        afterEach(() => {
            testAccount = null;
            TransactionSpy = null;


        });

        it(`should create a new Transaction Object`, () => {

            //Arrange
            //Act
            testAccount.credit(testCreditAmount, testDate);
            testAccount.debit(testDebitAmount, testDate);
            //Assert
            //See if transaction Object has been called with the expected arguments
            expect(TransactionSpy).toHaveBeenCalledWith(testCreditAmount, testDate, "credit", "clientAccountIDHere", 1000);
            expect(TransactionSpy).toHaveBeenCalledWith(testDebitAmount, testDate, "debit", "clientAccountIDHere", 500);
            expect(TransactionSpy).toHaveBeenCalledTimes(2);
        });

        it(`Account.debit() of £500 should equal total £1500 in #totalBalance in Account Object after inserting the previous 2 credit transactions of £1000 each`, () => {

            //Arrange
            testAccount.credit(testCreditAmount, testDate);
            testAccount.credit(testCreditAmount, testDate);
            testAccount.debit(testDebitAmount, testDate);
            //Act

            //Assert

            expect(testAccount._totalBalance).toBe(1500);
        });

        it(`Account.debit() of £500 should prevent transaction from subtracting the totalBalance if totalBalance is less than £500`, () => {

            //Arrange
            //Act
            testAccount.debit(testDebitAmount, testDate);
            //Assert

            expect(testAccount._totalBalance).toBe(0);
        });

        it(`Account.debit() should make property type in Transaction Object to 'debit'`, () => {

            //Act
            testAccount = new Account(testClientAccountID);

            testAccount.credit(testCreditAmount, testDate);
            testAccount.debit(testDebitAmount, testDate);
            transactionTypeSpy2 = Object.values(testAccount.transactionsList.at(-1)).includes("debit");

            //Assert
            expect(transactionTypeSpy2).toBe(true);

        });



    });

});

