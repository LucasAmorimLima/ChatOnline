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
        next(error)
    })
    res.render('chat', {}); 

};
