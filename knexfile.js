const { db } = require('./.env')

module.exports = {
  client: 'mssql',
        connection: db
  };

/*
{
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  */


