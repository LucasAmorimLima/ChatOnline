const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const Chat = connection.sequelize.define('chat', {
idUser: {
    type: DataTypes.INTEGER,
    references: {model: 'user' , key: 'id'},
    onDelete: 'CASCADE',
    allowNull: false
}, 
message:{
    type: DataTypes.STRING,
    allowNull: false
},
time: {
    type: DataTypes.DATE,
    allowNull: false
    }
});
module.exports = Chat
Chat.sync({force: true})