module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING    
  }, {
    tableName: 'tb_users',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  
  return User;
}