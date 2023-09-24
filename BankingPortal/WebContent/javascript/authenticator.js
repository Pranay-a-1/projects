/* Copyright (c) Adnan Jaswal, 2015. See the file license.txt for copying permission. */
/* Module for authenitcation  */
var Authenticator = function (serverModule) {
	
	/* the server module */
	var server = serverModule;
	
	/* authentication for the currently logged in user */
	var authenticationToken = ko.observable();
	
	/* flag to show authentication failed message */
	var showAuthenticationFailed = ko.observable(false);
	
	/* call back on successful login */
	var loginCallBack;
	
	/* model for user credentials */
	var credentials = {
		userName: ko.observable().extend({ required: true}),
		password: ko.observable().extend({ required: true})
	};
	
	/* return the authentication token */
	var getAuthenticationToken = function () {
		return authenticationToken();
	};

	/* return true if user is authenticated, false otherwise */
	var isAuthenticated = ko.pureComputed(function() {
		return authenticationToken() != false;
	});
	
	/* return the user name of the logged in user */
	var loggedInUser = ko.pureComputed(function () {
		var token = authenticationToken();
		var split = token.split("\.");
		var userPayload = JSON.parse(jwt.base64urldecode(split[1]));
		return userPayload.userName;
	});
	
	/* logout out of the application */
	var logout = function() {
		server.logout(authenticationToken());
		sessionStorage.clear();
		document.location.reload(true);
	};
	
	/* login to the server */
	var login = function() {		
		
		//check if validation errors occurred
		if (credentials.errors().length > 0) {
			console.log("Credentials model is invalid.....");
			credentials.errors.showAllMessages();
			return;
		}
		var token = server.login(credentials.userName(), credentials.password());
		if(token == false) {
			showAuthenticationFailed(true);
			return;
		}
		sessionStorage.setItem("token", token);
		authenticationToken(token);		
		console.log("login" + authenticationToken());
		loginCallBack();
	};
	
	/* method sets the call back */
	var setCallBack = function (callBack) {
		loginCallBack = callBack;
	};

	/* initialise the module */
	var init = function () {
		/* initialise errors */
		credentials.errors = ko.validation.group(credentials);
		
		var token = sessionStorage.getItem("token");
		if(token == null)
			authenticationToken(false)
		else
			authenticationToken(token)
	}();
	
	return {
		/* add members that will be exposed publicly */
		isAuthenticated: isAuthenticated,
		credentials: credentials,
		getAuthenticationToken: getAuthenticationToken,
		setCallBack: setCallBack,
		login: login,
		showAuthenticationFailed: showAuthenticationFailed,
		loggedInUser: loggedInUser,
		logout: logout
	};
};
