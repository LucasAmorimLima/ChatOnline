var erro = []
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
module.exports = {

    userValidator(name,nickName,password,email) {
        if(name==null || typeof name == undefined){
            erro.push('Nome Inválido')
        }
        if(nickName==null || typeof nickName == undefined){
            console.log(nickName);
            erro.push('Nickname Inválido')
        }
        if(password==null || typeof password == undefined){
            console.log(password);
            erro.push('Senha Inválida')
        }
        if(validateEmail(email)===false){
            console.log(email);
            erro.push('Email Inválido')
        }
        if(erro.length>0){
            
            return false
        }
        else{
            return true
        }
    },
    erro: erro
}
