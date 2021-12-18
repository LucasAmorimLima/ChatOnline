const Users = require('../models/UsersModel')
const {userValidator,erro} = require('../services/validations/userValidator');
exports.page = async (req, res, next) => {
    res.render('users/signup', { message: null});
} 

exports.insert  =  async (req, res, next) => {  
    const data = req.body
        console.log(data)
        if(userValidator(data.name, data.password, data.email)){
                          
            await  Users.create({
                name: data.name,
                password: data.password,
                email: data.email,
                nickName :data.nickName
            }).then(()=>{              
                res.render('login',{message:null});
            }).catch((error)=>{
                res.send(error)
                //implementation
            })
        }else{
            res.send(erro);
           //implementation
        }
};

    
    