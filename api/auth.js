require("dotenv").config();
const authSecret = process.env.DB_authSecret
//const { authSecret } = require('../.env')
const jwt = require('jwt-simple')



module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email){
            return res.status(400).send('Informe e-mail')
        }

        const user =  await app
                .db('TB_TECNICOS')
                .where({TECNICO_EMAIL : req.body.email})
                .where({TECNICO_ATIVO : true})
                .first()

        if(!user) return res.status(400).send('Usuário não encontrado ou não ativo')

        const now = Math.floor(Date.now()/1000)

        const payload = {
            id: user.TECNICO_ID,
            name: user.TECNICO_NOME,
            email: user.TECNICO_EMAIL,
            ativo: user.TECNICO_ATIVO,
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