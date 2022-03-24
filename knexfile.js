//const { db } = require('./.env')
require("dotenv").config();

//Utilizando variaveis de sessão
const dbServer = process.env.SERVER;
const dbUser =  process.env.USER 
const dbPass = process.env.PASSWORD 
const dbData =  process.env.DATABASE 
const dbPOrt =  process.env.DB_PORT 

module.exports = {
  client: 'mssql',
        connection: {
        server: dbServer ,
        user: dbUser ,
        password: dbPass,
        database: dbData ,
        port: 2014
        }
  };

