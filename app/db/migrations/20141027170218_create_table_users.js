'use strict';

exports.up = function(knex, Promise) {
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('users', function (table) {
            table.increments().primary();
            table.string('name');
			table.string('email');
			table.string('password');
            table.timestamps();
        }).then(function() {
            resolve();
        });
    });
};

exports.down = function(knex, Promise) {
    return new Promise(function(resolve, reject) {
        knex.schema.dropTable('users').then(function() {
            resolve();
        });
    });
};
