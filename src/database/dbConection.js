import {connect} from 'mongoose'
import { MONGODB_URI } from '../config'

connect(MONGODB_URI).then(resp => console.log(`DB conectada en ${resp.connection.name}`)).catch(error => console.log(error))