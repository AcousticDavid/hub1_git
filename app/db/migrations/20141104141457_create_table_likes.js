'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('likes', function (table) {
			table.increments().primary();
			table.integer('user').references('id').inTable('users');
			table.integer('post').references('id').inTable('posts');
		}).then(function() {
			resolve();
		});
	});
};

exports.down = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.dropTable('likes').then(function() {
			resolve();
		});
	});
};