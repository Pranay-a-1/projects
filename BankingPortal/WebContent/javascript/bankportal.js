/* Copyright (c) Adnan Jaswal, 2015. See the file license.txt for copying permission. */
/* Module for Customer banking portal application */
var BankPortal = (function () {
  /* add members here */
  /* module to retrieve data from the server */
  var server = ServerStub();
  /* module for authentication */
  var authenticator = Authenticator(server);
  /* edit mode for personal information */
  var personalInformationEditMode = ko.observable(false);
  /* flag to show personal information update message */
  var showPersonalInformationEditDone = ko.observable(false);
  /* flag to show personal information update message */
  var showPersonalInformationEditCancel = ko.observable(false);
  /* model validation errors */
  var validationErrors;
  /* wizard module for transfer of funds */
  var transferWizard = Wizard(3, "Funds transferred");
  /* model for fund transfer */
  var transfer = {
    toAccount: ko.observable(),
    fromAccount: ko.observable(),
    amount: ko.observable(),
    description: ko.observable(),
  };

  /* the model */
  var member = {
    personal: {
      firstName: ko.mementoObservable().extend({ required: true }),
      lastName: ko.mementoObservable().extend({ required: true }),
      address: {
        street: ko.mementoObservable().extend({ required: true }),
        city: ko.mementoObservable().extend({ required: true }),
        postCode: ko
          .mementoObservable()
          .extend({ required: true, maxLength: 4, number: true }),
        country: ko.mementoObservable().extend({ required: true }),
      },
      contactDetails: {
        phoneNumber: ko
          .mementoObservable()
          .extend({ required: true, minLength: 4, maxLength: 9, number: true }),
        emailAddress: ko
          .mementoObservable()
          .extend({ required: true, email: true }),
      },
    },
    accounts: ko.observableArray(),
    selectedAccount: ko.observable(),
    selectedAccountTransactions: ko.observableArray([]),
  };

  /* attribute to hold the active page */
  var activePage = ko.observable("Home");

  /* attribute to hold the active tab */
  var activeTab = ko.observable("Accounts");

  /* method to set the active page */
  var setActivePage = function (page) {
    console.log("Setting active page to: " + page);
    activePage(page);
  };

  /* 	returns true if parameter matches 
	 	active page, false otherwise */
  var isActivePage = function (page) {
    return activePage() === page;
  };

  /* method to set the active tab */
  var setActiveTab = function (tab) {
    console.log("Setting active tab to: " + tab);
    activeTab(tab);
  };

  /* returns true if parameter matches 
 	   active tab, false otherwise */
  var isActiveTab = function (tab) {
    return activeTab() === tab;
  };

  /* sets the selected account */
  var setSelectedAccount = function (account) {
    console.log("Setting selected account: " + account.summary.number);
    member.selectedAccount(account);
    member.selectedAccountTransactions(account.transactions());
  };

  /* returns true if the account matches selected account, false otherwise */
  var isSelectedAccount = function (account) {
    return account === member.selectedAccount();
  };

  /* method retrieves data from the server side and sets it in the model */
  var retrieveData = function () {
    console.log("Retrieving data from server......");
    var data = server.getMemberData(authenticator.getAuthenticationToken());
    console.log("Data retrieved from server: " + ko.toJSON(data));

    //add accounts to the model
    data.accounts.forEach(function (account) {
      member.accounts.push({
        summary: account.summary,
        transactions: ko.observableArray(account.transactions),
      });
    });

    //add personal information to the model
    member.personal.firstName(data.personal.firstName);
    member.personal.lastName(data.personal.lastName);
    member.personal.contactDetails.phoneNumber(data.personal.phoneNumber);
    member.personal.contactDetails.emailAddress(data.personal.emailAddress);

    member.personal.address.street(data.personal.address.street);
    member.personal.address.city(data.personal.address.city);
    member.personal.address.postCode(data.personal.address.postCode);
    member.personal.address.country(data.personal.address.country);

    commitPersonalInformation();
  };

  /* method to enable personal information edit mode */
  var enablePersonalnformationEdit = function () {
    personalInformationEditMode(true);
    showPersonalInformationEditDone(false);
    showPersonalInformationEditCancel(false);
  };

  /* method to commit state of personal information memento observables */
  var commitPersonalInformation = function () {
    member.personal.firstName.commit();
    member.personal.lastName.commit();
    member.personal.contactDetails.phoneNumber.commit();
    member.personal.contactDetails.emailAddress.commit();
    member.personal.address.street.commit();
    member.personal.address.city.commit();
    member.personal.address.postCode.commit();
    member.personal.address.country.commit();
  };

  /* method to reset state of personal information memento observables */
  var resetPersonalInformation = function () {
    member.personal.firstName.reset();
    member.personal.lastName.reset();
    member.personal.contactDetails.phoneNumber.reset();
    member.personal.contactDetails.emailAddress.reset();
    member.personal.address.street.reset();
    member.personal.address.city.reset();
    member.personal.address.postCode.reset();
    member.personal.address.country.reset();
  };

  /* method to cancel personal information edit mode */
  var cancelPersonalInformationEdit = function () {
    console.log("Cancelled edit pesonal information, values reverted.....");
    personalInformationEditMode(false);
    resetPersonalInformation();
    showPersonalInformationEditCancel(true);
  };

  /* method to submit personal information to the server */
  var submitPersonalInformation = function () {
    //check if validation errors occurred
    if (validationErrors().length > 0) {
      console.log("Member model is invalid.....");
      return;
    }

    //commit the state of personal information observables
    commitPersonalInformation();

    console.log(
      "Updating personal information on the server: " +
        ko.toJSON(member.personal)
    );
    server.updatePersonalInformation(
      ko.toJS(member.personal),
      authenticator.getAuthenticationToken()
    );
    console.log("Personal information updated on the server.....");

    //switch off the edit mode
    personalInformationEditMode(false);
    //show message that the submit was successful
    showPersonalInformationEditDone(true);
  };

  /* method to submit transfer funds request to the server */
  var transferFunds = function () {
    console.log(
      "Transferring amount " +
        transfer.amount() +
        " from account " +
        transfer.fromAccount().summary.number +
        " to account " +
        transfer.toAccount().summary.number
    );
    //submit the transfer request
    server.transferFunds(
      ko.toJS(transfer),
      authenticator.getAuthenticationToken()
    );

    //retrieve updated accounts
    var accounts = server.getAccounts(authenticator.getAuthenticationToken());

    //remove all stale accounts
    member.accounts.removeAll();

    //add updated accounts to the model
    accounts.forEach(function (account) {
      member.accounts.push({
        summary: account.summary,
        transactions: ko.observableArray(account.transactions),
      });
    });

    //clear the transfer model
    clearTransferModel();
  };

  /* method clears the transfer funds model */
  var clearTransferModel = function () {
    transfer.toAccount(null);
    transfer.fromAccount(null);
    transfer.amount(null);
    transfer.description(null);
  };

  /* call back for when authentication is successful */
  var postAuthenticationInit = function () {
    if (authenticator.isAuthenticated()) {
      retrieveData();
      //model validation errors
      validationErrors = ko.validation.group(member, { deep: true });
    }
  };

  var init = function () {
    /* add code to initialise this module */

    //set the call back for when the wizard is done
    transferWizard.setCallBack(transferFunds);
    //set the call back for successful login
    authenticator.setCallBack(postAuthenticationInit);

    //apply ko bindings
    ko.applyBindings(BankPortal);

    //init with data if user already authenticated
    postAuthenticationInit();
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* add members that will be exposed publicly */
    member: member,
    setActivePage: setActivePage,
    isActivePage: isActivePage,
    setActiveTab: setActiveTab,
    isActiveTab: isActiveTab,
    setSelectedAccount: setSelectedAccount,
    isSelectedAccount: isSelectedAccount,
    personalInformationEditMode: personalInformationEditMode,
    enablePersonalnformationEdit: enablePersonalnformationEdit,
    cancelPersonalInformationEdit: cancelPersonalInformationEdit,
    submitPersonalInformation: submitPersonalInformation,
    showPersonalInformationEditDone: showPersonalInformationEditDone,
    showPersonalInformationEditCancel: showPersonalInformationEditCancel,
    transferWizard: transferWizard,
    transfer: transfer,
    authenticator: authenticator,
  };
})();
