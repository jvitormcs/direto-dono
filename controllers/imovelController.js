const { Op } = require('sequelize')
const Imovel = require('../models/imovelModel')
const User = require('../models/userModel')

module.exports = class imovelController{

    static async getImovel(req, res){

        const imoveis = await Imovel.findAll({where: 
        
            {id_user: {
                [Op.gt]: 0
            }}
        
        })

        res.status(200).json({dados: imoveis})

    }

    static async imovel(req, res){

        const {nome_imovel, endereco_imovel, valor_imovel, email, descricao_imovel} = req.body

        const user = await User.findOne({
            where: {
                email_user : email
            }
        })

        if(!nome_imovel){
            res.status(422).json({message: 'O nome do imóvel não pode ficar em branco'})
            return
        }

        if(!endereco_imovel){
            res.status(422).json({message: 'O endereço do imóvel não pode ficar em branco'})
            return
        }

        if(!valor_imovel){
            res.status(422).json({message: 'O valor do imóvel não pode ficar em branco'})
            return
        }

        if(!descricao_imovel){
            res.status(422).json({message: 'A descrição do imóvel não pode ficar em branco'})
            return
        }

        if(!user){
            res.status(422).json({message: 'O usuário não existe'})
            return
        }


        const imovel = {
            nome_imovel,
            endereco_imovel,
            valor_imovel,
            id_user: user.id_user,
            descricao_imovel
        }
        
        try{

            await Imovel.create(imovel)
            res.status(200).json({message: 'Imóvel cadastrado com sucesso'})
            return


        } catch(err){
            res.status(400).json({message: `Ocorreu um erro: ${err}`})
        }


    }
}