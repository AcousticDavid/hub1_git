'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('posts', function (table) {
			table.increments().primary();
			table.integer('user').references('id').inTable('users');
			table.string('title');
			table.string('body');
			table.json('recent_comments');
			table.json('recent_like_users');
			table.json('count');
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
