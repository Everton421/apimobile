import prisma from "../../database/prisma";
import { Request, Response } from 'express';

export class ClientController {
    async cadastrar(req: Request, res: Response) {

        try {
            const {
                nome,
                cpf,
                rg,
                cep,
                cidade,
                estado,
                pais,
                telefone
            } = req.body;

            const client = await prisma.clients.create({
                data: {
                    DESCRICAO: nome,
                    RG: rg,
                    CPF: cpf,
                    TELEFONE: telefone,
                    CEP: cep,
                    CIDADE: cidade,
                    ESTADO: estado,
                    PAIS: pais,

                }
            })
            return res.json(client);

        } catch (erro) {
            return res.status(500).json({ "erro": "erro ao cadastrar" })
        }
    }

}