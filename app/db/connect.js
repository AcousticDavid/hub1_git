GLOBAL.knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'hub1',
        password : 'ghazlvk!@#09',
        database : 'hub1',
        charset  : 'utf8'
    },
    debug: true
});
GLOBAL.bookshelf = require('bookshelf')(knex);