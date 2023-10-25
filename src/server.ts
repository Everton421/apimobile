import {Request,Response} from 'express';
import 'dotenv/config'
import express from 'express';
import { router } from './router';
  import cors from 'cors'
    const app = express()
    const port = process.env.PORT_SERVER 
    app.use(express.json())
    app.use(router)
app.use(cors());
    app.listen(port,()=>{
        console.log(`app rodando porta ${port}`)
    })