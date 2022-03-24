 const config = require("../knexfile.js")
 let knex = require('knex')(config)

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