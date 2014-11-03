'use strict';

exports.up = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.createTable('categories', function (table) {
			table.increments().primary();
			table.string('type');
			table.string('name');
			table.integer('depth');
			table.integer('parent');
			table.timestamps();
		}).then(function() {
			resolve();
		});
	});
};

exports.down = function(knex, Promise) {
	return new Promise(function(resolve, reject) {
		knex.schema.dropTable('categories').then(function() {
			resolve();
		});
	});
};
