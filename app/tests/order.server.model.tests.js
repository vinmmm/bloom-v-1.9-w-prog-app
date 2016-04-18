// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Order = mongoose.model('Order');

// Define global variables
var user, order;

// Create an 'Order' model test suite
describe('Order Model Unit Tests:', function() {
	// Define a pre-tests function
	beforeEach(function(done) {
		// Create a new 'User' model instance
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		// Save the new 'User' model instance
		user.save(function() {
			order = new Order({
				title: 'Order Title',
				orderPlaced: 'placed order',
                orderStarted: 'started',
                restaurantNotified: 'notified',
                driverAtRestaurant: 'driver arrived',
                foodPickedUp: 'picked up the food',
                deliveredToCustomer: 'delivered',
                driverName: 'name of driver',
                estimatedDeliveryTime: 'delivery time estimate',
				user: user
			});

			done();
		});
	});

	// Test the 'Order' model save method
	describe('Testing the save method', function() {
		it('Should be able to save without problems', function() {
			order.save(function(err) {
				should.not.exist(err);
			});
		});

		it('Should not be able to save an order without a title', function() {
			order.title = '';
			
			order.save(function(err) {
				should.exist(err);
			});
		});
	});

	// Define a post-tests function
	afterEach(function(done) {
		// Clean the database
		Order.remove(function() {
			User.remove(function() {
				done();
			});
		});
	});
});