const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')
const Users = require('./UsersModel')

const Chat = connection.sequelize.define('chat', {
idUser: {
    type: DataTypes.INTEGER,
    references: {model: 'users' , key: 'id'},
    onDelete: 'CASCADE',
    allowNull: false
}, 
message:{
    type: DataTypes.STRING,
    allowNull: false
}
});

Chat.belongsTo(Users, { foreignKey: 'idUser', allowNull: true });
module.exports = Chat
//Chat.sync({force: true})