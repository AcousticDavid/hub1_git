'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('posts', function (table) {
			table.increments().primary();
			table.integer('userId').references('id').inTable('users');
			table.integer('categories');
			table.string('title');
			table.string('body');
			table.timestamps();
		}).then(function() {
			resolve();
		});
	});
};

exports.down = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.dropTable('posts').then(function() {
			resolve();
		});
	});
};
