// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'orders' module E2E test suite
describe('Orders E2E Tests:', function() {
	// Test the new order page
	describe('New Order Page', function() {
		it('Should not be able to create a new order', function() {
			// Load the new order page
			browser.get('http://localhost:3000/#!/orders/create');

			// Get the submit button
			element(by.css('input[type=submit]')).click();

			// Get the error message element
			element(by.binding('error')).getText().then(function(errorText) {
				// Check the error message text
				expect(errorText).toBe('User is not logged in');
			});
		});
	});
});