const Transactions = require('./Transactions.js');

class Account {

    accountID;
    totalBalance;
    accountTransactionsObj;
    _transactionsList;
    currentTransactionObj;

    constructor(_id = "newAccountID") {
        this.accountID = _id;
        this._totalBalance = 0;
        this.accountTransactionsObj = this.transactionsObject;
        this._transactionsList = this.transactionsList;
    }

    credit(_amount, _date) {

        this.addTotalBalance = _amount;

        this.currentTransactionObj = this.transactionsObject.createAndInsert(_amount, _date, "credit", this.accountID, this._totalBalance);


    }

    get transactionsObject() {

        this.accountTransactionsObj = this.accountTransactionsObj ?? new Transactions(this.accountID);
        return this.accountTransactionsObj;

    }

    get transactionsList() {

        this._transactionsList = this.transactionsObject.transactionsList ?? [];
        return this._transactionsList;

    }

    set addTotalBalance(_amount) {
        this._totalBalance = this._totalBalance + _amount;
    }

    get totalBalance() {
        return this._totalBalance;
    }

    //withdraw
    debit(_amount, _date) {

        if (this._totalBalance >= _amount) {
            this.deductTotalBalance = _amount;
            return this.currentTransactionObj = this.transactionsObject.createAndInsert(_amount, _date, "debit", this.accountID, this._totalBalance);
        } return "unsuccessful";

    }

    set deductTotalBalance(_amount) {
        this._totalBalance = this._totalBalance - _amount;
    }
}



module.exports = Account;