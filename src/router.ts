import { Router, Request, Response } from "express";
import { ClientController } from "./controllers/clientes/CadastraCliente";
import { ProductController } from "./controllers/produtos/CadastraProduto";
//import { conn } from "./database/databaseConfig";

import { con, publico } from "./database/databaseConfig";
import { testeConexao } from "./database/testeConexao";


export const router = Router();

router.get('/', (req: Request, res: Response) => {

})

router.get('/testeconexao', (req: Request, res: Response) => {
    const teste = new testeConexao;
    teste.teste(req, res);
})

router.all('/testeRequisicao', (req: Request, res: Response) => {
    console.log(req.body)
})

router.post('/cadastrarProduto',new ProductController().cadastrar)
router.post('/cadastrarCliente', new ClientController().cadastrar)