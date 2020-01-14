const User = require('../models/user.model');

exports.findAll = async () => {
  return await User.findAll();
}

exports.findById = async (id) => {
  return await User.findById(id);
}

exports.create = async (data) => {
  return await User.create(data)
}

exports.update = async (id, data) => {
  return await User.update(id, data)
}

exports.delete = async (id) => {
  return await User.delete(id)
}