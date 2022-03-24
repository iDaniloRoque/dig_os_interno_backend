const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const { DRIVERS } = require('mssql')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email){
            return res.status(400).send('Informe email')
        }

       if(req.body.email !== 'danilo@danilo') return res.status(400).send('Email/Senha inválidos!')
        
        const user =  {
            id: 1,
            name: 'DaniloRoque',
            email: 'dsr.proj3ct@gmail.com',
            admin: 'true'
        }

        if(!user) return res.status(400).send('Usuário não encontrado')

        const now = Math.floor(Date.now()/1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData){
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp *1000) > new Date()){
                    return res.send(true)
                }
            }
        } catch (e) {
            
        }
        res.send(false)
    }
    return { signin, validateToken }
}