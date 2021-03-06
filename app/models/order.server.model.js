// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'OrderSchema'
var OrderSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	orderPlaced: {
		type: String,
		default: '',
		trim: true
	},
	orderStarted: {
		type: String,
		default: '',
		trim: true
	},
	restaurantNotified: {
		type: String,
		default: '',
		trim: true
	},
	driverAtRestaurant: {
		type: String,
		default: '',
		trim: true
	},
	foodPickedUp: {
		type: String,
		default: '',
		trim: true
	},
	deliveredToCustomer: {
		type: String,
		default: '',
		trim: true
	},
	driverName: {
		type: String,
		default: '',
		trim: true
	},
	estimatedDeliveryTime: {
		type: String,
		default: '',
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Create the 'Order' model out of the 'OrderSchema'
mongoose.model('Order', OrderSchema);