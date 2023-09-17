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
  var member = {};

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

  /* method to initialize the module */
  var init = function () {
    /* add code to initialize this module */
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
  };
})();
