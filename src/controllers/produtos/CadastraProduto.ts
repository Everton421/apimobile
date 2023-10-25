import prisma from '../../database/prisma'
import {Request,Response} from 'express'

    export class ProductController{
        async cadastrar(req:Request,res:Response){
          
            try{
            const {name,preco,aplicacao,sku} = req.body;
         
                const produto = await prisma.products.create({
                    data:{
                        DESCRICAO:name,
                        PRECO:preco,
                        APLICACAO:aplicacao,
                        SKU:sku,
                }})
            return res.json(produto)
        
            }catch(err){
                console.error(err)
                return res.status(500).json({"erro":"ocorreu um erro ao cadastrar!"})
                } 
            }
        }