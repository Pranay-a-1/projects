/* Module for Registration form application */
var RegistrationForm = (function () {
  /* add members here */
  // model
  var customer = {
    personalInfo: {
      firstName: ko.observable(),
      middleName: ko.observable(),
      lastName: ko.observable(),
      title: ko.observable(),
    },
    contactDetails: {
      phoneNumber: ko.observable(),
      emailAddress: ko.observable(),
      preferredContact: ko.observable(),
    },
    address: {
      residential: {
        street: ko.observable(),
        city: ko.observable(),
        postCode: ko.observable(),
        country: ko.observable(),
      },
      postal: {
        type: ko.observable(),
        streetAddress: {
          street: ko.observable(),
          city: ko.observable(),
          postCode: ko.observable(),
          country: ko.observable(),
        },
        poBoxAddress: {
          poBox: ko.observable(),
          city: ko.observable(),
          postCode: ko.observable(),
          country: ko.observable(),
        },
      },
    },
  };

  /* form submission */
  var submit = function () {
    console.log("The form is submitted");
    console.log(ko.toJSON(customer));
  };

  /* options for the title drop down*/
  var titleOptions = [
    {
      value: "Mr",
      setTitle: function () {
        RegistrationForm.customer.personalInfo.title("Mr");
      },
    },
    {
      value: "Mrs",
      setTitle: function () {
        RegistrationForm.customer.personalInfo.title("Mrs");
      },
    },
    {
      value: "Miss",
      setTitle: function () {
        RegistrationForm.customer.personalInfo.title("Miss");
      },
    },
    {
      value: "Dr",
      setTitle: function () {
        RegistrationForm.customer.personalInfo.title("Dr");
      },
    },
  ];

  /* computed observable for title drop down text change */
  var titleSelect = ko.pureComputed(function () {
    if (customer.personalInfo.title() == null) {
      return "select";
    } else {
      return customer.personalInfo.title();
    }
  });

  var init = function () {
    /* add code to initialize this module */
    ko.applyBindings(RegistrationForm);
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* add members that will be exposed publicly */
    submit: submit,
    customer: customer,
    titleOptions: titleOptions,
    titleSelect: titleSelect,
  };
})();
