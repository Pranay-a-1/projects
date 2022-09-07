# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

# User Story 1 and User Story 2

**Given** a client makes a deposit of 1000 on 10-01-2012
```
As a client
I want to make a deposit of £1000 on 10-01-2012
So that i can add the deposit amount to my account balance 
```

**And** a deposit of 2000 on 13-01-2012  

```
As a client
I want to deposit £2000 on 13-01-2012
So that i can add the deposit amount to my account balance 
```


|Object    | property          | message                            | output |
|----------|------------------ |------------------------------------| ------------ |
|Account | _transactionsList | credit(amount@number, date@string) | _transactionsList[@transactionObject] |
|Account | _totalBalance | addTotalBalance(amount@number) | @number| // adds the amount to the totalBalance
|Transactions | transactionsList | createAndInsert(@transactionObject@properties) | transactionsList| 
|Transaction | ID | transactionID()  | @string|
|Transaction | type |   | @string|
|Transaction | date |   | @string|
|Transaction | Amount |   | @Number|


#### Tests
1. Account.credit() should create a new Transaction Object with the following arguments - £1000, date, "credit", "clientAccountIDHere",1000
2. Account.credit() £1000 should insert the newly created transaction Object in the transactionsList array
3. Account.credit() £1000 should make #totalBalance in Account Object to equal £1000
4. Account.credit() £1000 should make totalBalance in Account Object to equal £2000  (adding to £1000 from previous transaction) in #totalBalance in Account Object
5. Account.credit() should make property type in Transaction Object to 'credit'






# User story 3

**And** a withdrawal of 500 on 14-01-2012  

```
As a client
I want to withdraw £500 on 14-01-2012
So that i can add the deposit amount to my account balance

```

|Object    | Property          | Message                            | Output |
|----------|------------------ |------------------------------------| ------------ |
|Account | _transactionsList | debit(amount@number, date@string) | _transactionsList[@transactionObject] |
|Account | _totalBalance | deductTotalBalance(amount@number) | @number| // deducts the amount from the totalBalance
|Transactions | transactionsList | createAndInsert(@transactionObject@properties) | transactionsList| 
|Transaction | id | transactionID()  | @string|
|Transaction | type |   | @string|
|Transaction | date |   | @string|
|Transaction | Amount |   | @Number|


#### Tests

1. Account.debit() should create a new Transaction Object with the following arguments - £500, date, "debit", "clientAccountIDHere", 500
2. Account.debit() of £500 should equal total £1500 in #totalBalance in Account Object after inserting the previous 2 credit transactions
3. Account.debit() of £500 should prevent transaction from subtracting the totalBalance if totalBalance is less than £500 
4. Account.debit() should make property type in Transaction Object to 'debit'


# User story 4 and User story 5

**When** she prints her bank statement  
**Then** she would see

```
As a client
I want to print my bank statement 
So that I can see all my transactions and balance changes per transaction.

```

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

|Object    | Property          | Message                            | Output       |
|----------|------------------ |------------------------------------| ------------ |
|Account   | transactions     |print())                    | @console.log |


#### Tests

1.Check if print() is called.


# Domain Model

|Object    | property          | message                            | output |
|----------|------------------ |------------------------------------| ------------ |
|Account | _transactionsList | credit(amount@number, date@string) | _transactionsList[@transactionObject] |
|Account | _totalBalance | addTotalBalance(amount@number) | @number| // adds the amount to the totalBalance
|Transactions | transactionsList | createAndInsert(@transactionObject@properties) | transactionsList| 
|Transaction | ID | transactionID()  | @string|
|Transaction | type |   | @string|
|Transaction | date |   | @string|
|Transaction | Amount |   | @Number|
|Account | _totalBalance | deductTotalBalance(amount@number) | @number| // deducts the amount from the totalBalance
|Account   | transactions     |Print()                    | @console.log |
