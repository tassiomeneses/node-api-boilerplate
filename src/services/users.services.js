const models = require('../models/');

exports.findAll = async () => {
  return await models.User.findAll({attributes: ['id', 'name', 'email', 'created_at', 'updated_at']}) 
}

exports.findById = async (id) => {  
  const query = {where: {id}}
  return await models.User.findOne(query)
}

exports.create = async (data) => {
  return await models.User.create(data)
}

exports.update = async (id, data) => {
  const query = {where: {id}}
  return await models.User.update(data,  query)
}

exports.delete = async (id) => {
  const query = {where: {id}}
  return await models.User.destroy(query)
}