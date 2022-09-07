class Transaction {

    amount;
    date;
    type;
    accountID;
    ID;
    _trackingBalance;

    constructor(_amount, _date, _type, _accountID, _trackingBalance) {
        this.amount = _amount.toFixed(2);
        this.date = _date;
        this.type = _type;
        this.accountID = _accountID;
        this.ID = this.transactionID;
        this._trackingBalance = _trackingBalance.toFixed(2);
    }

    get transactionID() {

        this.ID = (this.amount + this.type + this.date.replaceAll(`/`, '') + this.accountID);
        //console.log(this.ID);
        //console.log(this.amount);
        return this.ID;

    }



}


module.exports = Transaction;