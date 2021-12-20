exports.page = async (req, res, next) => {
    res.render('users/signup', { message: null});
} 

exports.insert  =  async (req, res, next) => {  

    const data = req.body
        console.log(data)  
        if(userValidator(data.name,data.nickName, data.password, data.email)){
                          
            await  Users.create({
                name: data.name,
                nickName: data.nickName,
                password: data.password,
                email: data.email,
                
            }).then(()=>{              
                res.render('login',{message:null,messageSuccess:"Usuário cadastrado com sucesso"});
            }).catch(()=>{
                res.render('users/signup',{message:"Usuário ou senha inválidos"});
            })
        }else{
            res.render('users/signup',{message:erro});
           
        }

};

    
    