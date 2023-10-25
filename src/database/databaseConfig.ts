
import 'dotenv/config'
const mysql = require('mysql')

    const hostname = process.env.HOST  
    const portdb = process.env.PORT_DB
    const username = process.env.USER
    const dbpassword = process.env.PASSWORD

       export const publico = process.env.DATABASE_PUBLICO;
       export const estoque = process.env.DATABSE_ESTOQUE;
       export const vendas = process.env.DATABSE_VENDAS;
       export const financeiro = process.env.DATABSE_FINANCEIRO;




 export var con:any = mysql.createPool({
            connectionLimit : 10,
            host: hostname,
            user: username,
            port: portdb,
            password: dbpassword,
            database: estoque,
            database2: publico,
            database3: vendas,
        })


