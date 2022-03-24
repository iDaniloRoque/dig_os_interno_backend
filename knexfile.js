const { db } = require('./.env')

module.exports = {
  client: 'mssql',
        connection: db
  };

