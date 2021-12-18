const passport = require('passport');
const UsersModel = require('../models/UsersModel')
exports.page  =  async (req, res, next) => {  

        res.render('login',{message:null});
};
exports.authentication  =  async (req, res, next) => {    

    let {nickName,password} = req.body
    console.log(req.body)
    await UsersModel.findAll({where:{ nickName: nickName, password: password}})
    .then((result)=>{
        res.render('chat',{nickName}); 
    }).catch((err)=>{
        console.log(err)
    }) 

    /** 
    passport.authenticate('local', { 
        successRedirect: '/chat', 
        failureRedirect: '/login?fail=true' 
    })   
    */
};
/** 
exports.authentication  =  async (req, res, next) => {  
    const data = req.body
  
    if(loginValidator(data.email, data.senha)){             
       
        await Users.findAll({where: {senha: req.body.senha,email: req.body.email}}).then((result)=>{
                    
            return res.json({auth: true, id:result[0].id, nome:result[0].nome, token: generateJWT(result[0].id)})                    
        }).catch((error)=>{
            exptions.push(500,error)
            next();
            })
                
        }
};
*/



