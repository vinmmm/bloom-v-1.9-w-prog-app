// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../server'),
	request = require('supertest'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Order = mongoose.model('Order');

// Define global test variables
var user, order;

// Create an 'Articles' controller test suite
describe('Order Controller Unit Tests:', function() {
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

			order.save(function(err) {
				done();
			});
		});
	});

	// Test the 'Order' GET methods
	describe('Testing the GET methods', function() {
		it('Should be able to get the list of orders', function(done) {
			// Create a SuperTest request
			request(app).get('/api/orders/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					res.body.should.be.an.Array.and.have.lengthOf(1);
					res.body[0].should.have.property('title', order.title);
					res.body[0].should.have.property('orderPlaced', order.orderPlaced);
					res.body[0].should.have.property('orderStarted', order.orderStarted);
					res.body[0].should.have.property('restaurantNotified', order.restaurantNotified);
					res.body[0].should.have.property('driverAtRestaurant', order.driverAtRestaurant);
					res.body[0].should.have.property('foodPickedUp', order.foodPickedUp);
					res.body[0].should.have.property('deliveredToCustomer', order.deliveredToCustomer);
					res.body[0].should.have.property('driverName', order.driverName);
					res.body[0].should.have.property('estimatedDeliveryTime', order.estimatedDeliveryTime);
					
					done();
				});
		});

		it('Should be able to get the specific order', function(done) {
			// Create a SuperTest request
			request(app).get('/api/orders/' + order.id)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					res.body.should.be.an.Object.and.have.property('title', order.title);
					res.body.should.have.property('orderPlaced', order.orderPlaced);
					res.body.should.have.property('orderStarted', order.orderStarted);
					res.body.should.have.property('restaurantNotified', order.restaurantNotified);
					res.body.should.have.property('driverAtRestaurant', order.driverAtRestaurant);
					res.body.should.have.property('foodPickedUp', order.foodPickedUp);
					res.body.should.have.property('deliveredToCustomer', order.deliveredToCustomer);
					res.body.should.have.property('driverName', order.driverName);
					res.body.should.have.property('estimatedDeliveryTime', order.estimatedDeliveryTime);

					done();
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