const { db } = require('./.env')

module.exports = {
  client: 'mssql',
        connection: {
        server: process.env.SERVER ,
        user: process.env.USER ,
        password: process.env.PASSWORD ,
        database: process.env.DATABASE ,
        port: process.env.DATABASEPORT 
        }
  };

