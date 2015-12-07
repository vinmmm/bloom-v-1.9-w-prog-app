// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/mean-development',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: 'Facebook Application ID',
		clientSecret: 'Facebook Application Secret',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '412499550173-fmgticiabspbl2fs667qalrdiihds5km.apps.googleusercontent.com',
		clientSecret: 'Vd2zhDJhFAe4Sn6QYddqz6cI',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};