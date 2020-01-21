const usersService = require('../services/users.services');

exports.index = async (req, res) => {  
  try {
    const users = await usersService.findAll()
    return res.json(users)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }  
}

exports.show = async (req, res) => {  
  try {
    const { id } = req.params    
    const user = await usersService.findById(id)
    const status = user ? 200 : 404
    const response = user ? user : {message: 'Registro não encontrado.'}
    return res.status(status).json(response)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.create = async (req, res) => {  
  try {
    const { body } = req
    const user = await usersService.create(body)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.update = async (req, res) => {  
  try {
    const { id } = req.params
    const { body } = req     
    const user = await usersService.update(id, body)
    const status = user ? 200 : 404
    const response = user ? user : {message: 'Registro não encontrado.'}
    return res.status(status).json(response)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.delete = (req, res) => {  
  try {
    const { id } = req.params
    const user = await usersService.delete(id)
    return res.status(204).
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}