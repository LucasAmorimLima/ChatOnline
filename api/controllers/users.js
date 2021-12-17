exports.page = async (req, res, next) => {
    res.render('users/signup', { message: null});
} 

exports.insert  =  async (req, res, next) => {  
        res.send('respond with a resource');
};

    
    