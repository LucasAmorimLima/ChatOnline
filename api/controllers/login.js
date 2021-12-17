const passport = require('passport');

exports.page  =  async (req, res, next) => {  
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null }); 
};
exports.authentication  =  async (req, res, next) => {    
    passport.authenticate('local', { 
        successRedirect: '/index', 
        failureRedirect: '/login?fail=true' 
    })   
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



