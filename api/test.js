let knex = require('knex')({
    client: 'mssql',
    connection: {
        server: '127.0.0.1',
        user: 'sa',
        password: '123456',
        database: 'digsiste_03'
    }
})

knex.select('*').from('TB_CLIENTES')
.then(function(depts){
    depts.forEach(function(dept){
        console.log(dept);
    });
}).catch(function(err){
    console.log(err);
}).finally(function(){
    knex.destroy();
});