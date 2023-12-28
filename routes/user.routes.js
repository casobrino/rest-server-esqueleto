import { Router } from 'express'
import {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
} from '../controllers/user.controller.js'

export const router = Router()

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/:id', usuariosDelete)
