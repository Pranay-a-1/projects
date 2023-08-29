/* Module for Registration form application */
var RegistrationForm = (function () {
  /* add members here */

  /* form submission */
  var submit = function () {
    console.log("The form is submitted");
  };

  var init = function () {
    /* add code to initialize this module */
    ko.applyBindings(RegistrationForm);
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* add members that will be exposed publicly */
    submit: submit,
  };
})();
