import { response } from 'express'
export const usuariosGet = (req, res = response) => {
  const { nombre } = req.query
  res.json({
    ok: true,
    msg: 'get Api - Controller',
    nombre
  })
}
export const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body
  res.json({
    nombre, edad
  })
}
export const usuariosPut = (req, res = response) => {
  const { id } = req.params
  res.json({
    ok: true,
    msg: 'put Api - Controller',
    id
  })
}
export const usuariosDelete = (req, res = response) => {
  const { id } = req.params
  res.json({
    ok: true,
    msg: 'delete Api - Controller',
    id
  })
}
