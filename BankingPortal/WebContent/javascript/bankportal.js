/* Module for Customer banking portal application */
var BankPortal = (function () {
  /* add members here */

  /* attribute to hold the active page */
  var activePage = ko.observable("Home");

  /* method to set the active page */
  var setActivePage = function (page) {
    console.log("Setting active page to: " + page);
    activePage(page);
  };

  /* returns true if parameter matches 
  active page, false otherwise */
  var isActivePage = function (page) {
    return activePage() === page;
  };

  /* the model */
  var member = {
    accounts: ko.observableArray(),
    selectedAccount: ko.observable(),
    selectedAccountTransactions: ko.observableArray([]),
  };

  /* module to retrieve data from the server */
  var server = ServerStub();

  console.log("Retrieving data from server......");
  var data = server.getMemberData();

  /* attribute to hold the active tab */
  var activeTab = ko.observable("Accounts");

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

  /* method retrieves data from the server side and sets it in the model */
  var retrieveData = function () {
    console.log("Retrieving data from server......");
    var data = server.getMemberData();
    console.log("Data retrieved from server: " + ko.toJSON(data));

    //add accounts to the model
    data.accounts.forEach(function (account) {
      member.accounts.push({
        summary: account.summary,
        transactions: ko.observableArray(account.transactions),
      });
    });
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

  /* method to initialize the module */
  var init = function () {
    /* add code to initialize this module */
    retrieveData();
    //apply ko bindings
    ko.applyBindings(BankPortal);
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* add members that will be exposed publicly */
    member: member,
    setActivePage: setActivePage,
    activePage: activePage,
    isActivePage: isActivePage,
    setActiveTab: setActiveTab,
    isActiveTab: isActiveTab,
    server: server,
    retrieveData: retrieveData,
    setSelectedAccount: setSelectedAccount,
    isSelectedAccount: isSelectedAccount,
  };
})();
