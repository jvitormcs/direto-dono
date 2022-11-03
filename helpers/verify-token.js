const jwt = require('jsonwebtoken')
const getToken = require('./get-token')


const checkToken = (req, res, next) => {

    if(!req.headers.authorization){
        return res.status(401).json({message: 'Seu acesso foi negado'})
    }

    const token = getToken(req)

    if(!token){
        return res.status(401).json({message: 'Seu acesso foi negado'})
    }

    try {
        const verified = jwt.verify(token, 'lnalsndkalihasbucba')
        req.user = verified
        next()
    } catch(err){
        return res.status(400).json({message: 'Token invalido'})
    }
    
}

module.exports = checkToken