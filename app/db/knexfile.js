// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'hub1',
      password : 'ghazlvk!@#09',
      database : 'hub1',
      charset  : 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true
  },

  staging: {
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'hub1',
      password : 'ghazlvk!@#09',
      database : 'hub1',
      charset  : 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true
  },

  production: {
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'hub1',
      password : 'ghazlvk!@#09',
      database : 'hub1',
      charset  : 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    debug: true
  }

};
