// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'orders' module unit test suite
describe('Testing Orders Controller', function() {
	// Define global variables
	var _scope, OrdersController;

	// Define a pre-tests function
	beforeEach(function() {
		// Load the 'mean' module
		module('mean');

		// Add a new Jasmine matcher
		jasmine.addMatchers({
			toEqualData: function(util, customEqualityTesters) {
				return {
					compare: function(actual, expected) {
						return {
							pass: angular.equals(actual, expected)
						};
					}
				};
			}
		});

		// Use the 'inject' method to inject services
		inject(function($rootScope, $controller) {
			// Create a mock scope object
			_scope = $rootScope.$new();

			// Create a new mock controller
			OrdersController = $controller('OrdersController', {
				$scope: _scope
			});
		});
	});

	// Test the 'find' method
	it('Should have a find method that uses $resource to retrieve a list of orders', inject(function(Orders) {
		// Use the 'inject' method to inject services
		inject(function($httpBackend) {
			// Create a sample order
			var sampleOrder = new Orders({
				title: 'An Order about MEAN',
				content: 'MEAN rocks!'
			});

			// Create a sample orders list
			var sampleOrders = [sampleOrder];

			// Define a request assertion
			$httpBackend.expectGET('api/orders').respond(sampleOrders);

			// Call the controller's 'find' method
			_scope.find();

			// Flush the mock HTTP results
			$httpBackend.flush();

			// Test the results
			expect(_scope.orders).toEqualData(sampleOrders);
		});
	}));

	// Test the 'findOne' method
	it('Should have a findOne method that uses $resource to retreive a single of order', inject(function(Orders) {
		// Use the 'inject' method to inject services
		inject(function($httpBackend, $routeParams) {
			// Create a sample order
			var sampleOrder = new Orders({
				title: 'An Order about MEAN',
				content: 'MEAN rocks!'
			});

			// Set the 'orderId' route parameter
			$routeParams.orderId = 'abcdef123456789012345678';

			// Define a request assertion
			$httpBackend.expectGET(/api\/orders\/([0-9a-fA-F]{24})$/).respond(sampleOrder);

			// Call the controller's 'findOne' method
			_scope.findOne();

			// Flush the mock HTTP results
			$httpBackend.flush();

			// Test the results
			expect(_scope.order).toEqualData(sampleOrder);
		});
	}));
});