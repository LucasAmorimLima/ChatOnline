var erro = []
module.exports = {

    loginValidator(nickName,password) {
        console.log(nickName,password)       
        if(nickName===null || typeof nickName === undefined){
            erro.push('Senha Inválida')
        }
        if(password===null || typeof password === undefined){
            erro.push('Senha Inválida')
        }
        if(erro.length>0){
            console.log("err")
            return false
        }
        else{
            console.log("true")
            return true
        }
    },
    erro: erro
}
