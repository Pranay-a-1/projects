const Account = require('../src/Account.js');


describe(`Account tests`, () => {

    let testCreditAmount = 1000;

    let testCreditDate = "10-01-2012";

    let transactionsObject = null;

    let testClientAccountID = 'clientAccountIDHere';

    let testAccount, testTransaction;

    describe('Account class - credit() tests', () => {




        beforeEach(() => {
            testAccount = new Account(testClientAccountID);
            creditSpy = spyOn(testAccount.transactionsObject, `createAndInsert`);

        });

        afterEach(() => {
            testAccount = null;
            creditSpy = null;
        });


        it(`should create a new Transaction Object`, () => {

            //Arrange
            //Act
            testAccount.credit(testCreditAmount, testCreditDate);
            //Assert
            //See if transaction Object has been called with the expected arguments
            expect(creditSpy).toHaveBeenCalledOnceWith(testCreditAmount, testCreditDate, "credit", "clientAccountIDHere", 1000);
        });



        it(`Account.credit() £1000 should insert the newly created transaction Object in the #transactionsList array`, () => {

            //Act
            testAccount = new Account(testClientAccountID);
            testAccount.credit(testCreditAmount, testCreditDate);

            //Assert
            expect(testAccount.transactionsList.length).toBe(1);

        });
    });


    describe('Account class - totalBalance tests', () => {

        beforeEach(() => {
            testAccount = new Account(testClientAccountID);

        });


        it(`should make #totalBalance in Account Object to equal £1000`, () => {

            //Act
            testAccount.credit(testCreditAmount, testCreditDate);

            //Assert
            expect(testAccount._totalBalance).toBe(1000);

        });



        it(`should make #totalBalance in Account Object to equal £2000 when Account.credit() with £1000 (adding to £1000 from previous transaction)`, () => {

            //Act
            testAccount.credit(testCreditAmount, testCreditDate);
            testAccount.credit(testCreditAmount, testCreditDate);

            //Assert
            expect(testAccount._totalBalance).toBe(2000);

        });
    });

    describe('Account class - transaction properties tests', () => {

        beforeEach(() => {
            testAccount = new Account(testClientAccountID);


        });


        it(`Account.credit() should make property type in Transaction Object to 'credit'`, () => {

            //Act
            testAccount.credit(testCreditAmount, testCreditDate);
            transactionTypeSpy = Object.values(testAccount.transactionsObject.transactionsList.at(-1)).includes("credit");

            //Assert
            expect(transactionTypeSpy).toBe(true);

        });


    });



});

