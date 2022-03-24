
module.exports = app => {

    app.post('/signin', app.api.auth.signin);
    app.post('/validateToken', app.api.auth.validateToken);


    app.route('/clientes')
        .all(app.config.passport.authenticate())
        .get(app.api.client.get)
}