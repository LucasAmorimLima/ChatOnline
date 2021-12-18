const {loginValidator,erro} = require('../services/validations/loginValidation')
const Users = require('../models/UsersModel')
const {generateJWT} = require('../services/generateJWT')
exports.page  =  async (req, res, next) => {  
        res.render('login', { message: null }); 
};

exports.authentication  =  async (req, res, next) => {  
    const data = req.body
  
    if(loginValidator(data.nickName, data.password)){             
       
        await Users.findAll({where: {password: req.body.password,nickName: req.body.nickName}}).then((result)=>{
                    
            res.render('chat',{auth: true, id:result[0].id, nickName:result[0].nickName, token: generateJWT(result[0].id)})                    
        }).catch((error)=>{
            console.log(error)
        })
    }else{
        res.render('login', { message: erro }); 
    }
};




