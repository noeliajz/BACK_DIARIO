import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path'
import 'dotenv/config'
import './src/database/dbConection'

const app = express();

app.set('port', process.env.PORT|| 8080)
app.listen( app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
/* console.log(__dirname) */
app.use(express.static(path.join(__dirname, '/public')))

