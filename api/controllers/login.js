const passport = require('passport');

exports.page  =  async (req, res, next) => {  
        res.render('login', { message: null ,messageSuccess:null}); 
};

exports.authentication  =  async (req, res, next) => {  
    const data = req.body
  

    if(loginValidator(data.nickName, data.password)){             
        var resulta = []
        await Users.findAll({where: {password: req.body.password,nickName: req.body.nickName}}).then((result)=>{
             resulta = result
        }).catch(()=>{
            res.render('users/signup',{message:"Usuário ou senha inválidos"});
        })
        attributes = { exclude: ['createdAt', 'updatedAt'] }
            await Chat.findAll({
                raw: true,
                attributes: attributes,
                include: [{
                    model: Users,
                    require: true,
                    attributes: ['name'] ,
                }],
                order : [['id', 'ASC']]
            }).then((result)=>{
                for (let index = 0; index < result.length; index++) {
                    for (const [key, value] of Object.entries(result[index])) {
                        if(key=='user.name'){
                           result[index].name = `${value}`
                        }else{
                        result[index].key = `${value}`
                        }       
                    }
                }
                
                res.render('chat',{auth: true, id:resulta[0].id, nickName:resulta[0].nickName, token: generateJWT(resulta[0].id), content : result})                    
                
            }).catch((error)=>{
                next(error);
            }) 
    }else{
        res.render('login', { message: erro }); 
    }

};




