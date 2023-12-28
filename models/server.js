import express from 'express'
import cors from 'cors'
import { router as user } from '../routes/user.routes.js'

export class Server {
  constructor () {
    this.app = express()
    this.PORT = process.env.PORT
    // *Pats del enrutador
    this.usuariosPath = '/api/usuarios'

    // middleWare
    this.middlewares()
    // Rutas de mi aplicacion
    this.routes()
  }

  middlewares () {
    // *CORS
    this.app.use(cors())
    // Lectura y parseo de Body
    this.app.use(express.json())

    // directorio publico
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use(this.usuariosPath, user)
  }

  listener () {
    this.app.listen(this.PORT, () => {
      console.log('Servidor corriendo en: ', this.PORT)
    })
  }
}
