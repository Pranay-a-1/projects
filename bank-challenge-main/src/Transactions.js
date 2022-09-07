const Transaction = require('./Transaction');

class Transactions {
    TransactionObject;
    transactionsAccountID;
    transactionsList;

    constructor(_accountID) {
        this.transactionsAccountID = _accountID;
        this.transactionsList = [];
    }

    createAndInsert(_amount, _date, _type, _accountID, _trackingBalance) {

        this.TransactionObject = new Transaction(_amount, _date, _type, this.transactionsAccountID, _trackingBalance);

        this.transactionsList = [...this.transactionsList, this.TransactionObject];
        return this.transactionsList;
    }



}

// class Transactions {
//     transactionsAccountID;
//     #transactionsList;
//     #TransactionObject;



//     constructor(_accountID) {
//         this.transactionsAccountID = _accountID;
//         this.#transactionsList = [];
//     }

//     createAndInsert(_amount, _date, _type, _accountID) {
//         this.#TransactionObject = new Transaction(_amount, _date, _type, this.transactionsAccountID);

//         this.#transactionsList = [...this.#transactionsList, this.#TransactionObject];
//         return this.#TransactionObject;
//     }


//     get transactionsList() {
//         return this.#transactionsList;
//     }
// }

module.exports = Transactions;