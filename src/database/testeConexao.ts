    import { con,publico,vendas,financeiro } from "./databaseConfig";

import {Request,Response} from 'express'

    export class testeConexao {

            async teste(req:Request,res:Response){
      
                await con.getConnection((err:any, connection:any) => {
                  if (err) {
                        console.log('query connec error!', err);
                        } else {
                               return res.send('conexao efetuada com sucesso!') 
                    } 
                });
            }
    
    }
