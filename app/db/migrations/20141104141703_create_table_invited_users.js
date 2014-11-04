'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('invited_users', function (table) {
			table.increments().primary();
			table.integer('user').references('id').inTable('users');
			table.string('name');
			table.string('email');
			table.string('phone');
			table.string('serial');
			table.timestamps();
		}).then(function() {
			resolve();
		});
	});
};

exports.down = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.dropTable('invited_users').then(function() {
			resolve();
		});
	});
};
