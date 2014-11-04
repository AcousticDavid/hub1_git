'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('comments', function (table) {
			table.increments().primary();
			table.integer('user').references('id').inTable('users');
			table.integer('post').references('id').inTable('posts');
			table.string('body');
			table.timestamps();
		}).then(function() {
			resolve();
		});
	});
};

exports.down = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.dropTable('comments').then(function() {
			resolve();
		});
	});
};
