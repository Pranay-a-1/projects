const Account = require('./Account');

class Statement {

    constructor(AccountObj) {
        this.AccountObj = AccountObj;
        this.list = this.AccountObj.transactionsList;
        //this.listLen = this.AccountObj.transactionsList.length * -1;
        this.Bars = '||';
    }

    printHeader() {

        const header = ["date       ", " credit  ", " debit  ", " balance"];

        console.log(header.join(this.Bars));
    }

    print(AccountObj = this.AccountObj) {

        this.printHeader();

        for (let i = -1, j = 0, listLen = (this.list.length * -1); i >= listLen; i--) {

            let trn = this.list.at(i); //returns transaction Object in the list at i index

            let credit = trn.type === "credit" ? trn.amount : "       ";

            let debit = trn.type === "debit" ? trn.amount : "      ";

            const propertyNames = ["date", credit, debit, "_trackingBalance"]; //values will be used to property values of transaction object

            console.log(`${trn[propertyNames[j]]} ${this.Bars} ${credit} ${this.Bars} ${debit} ${this.Bars} ${trn[propertyNames[j + 3]]}   `);
        };


    }
}


module.exports = Statement;