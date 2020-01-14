const usersService = require('../services/users.services');

exports.index = async (req, res) => {  
  try {
    const users = await usersService.findAll()
    return res.json(users)
  } catch (error) {
    return res.json({error: error})
  }  
}

exports.show = (req, res) => {  
}

exports.create = (req, res) => {  
}

exports.upddate = (req, res) => {  
}

exports.delete = (req, res) => {  
}