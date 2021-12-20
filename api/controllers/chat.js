const Chat  = require('../models/ChatModel')
const User = require('../models/UsersModel')

exports.page  =  async (req, res, next) => {  
    content = getMessages()
    res.render('chat',{content}); 
};

exports.insert  =  async (id,message) => {  
 
    await  Chat.create({
        idUser: id,
        message: message,
    }).then((result)=>{              
        console.log(result);
        
    }).catch((error)=>{
        console.log(error)
        //implementation
    })
};
