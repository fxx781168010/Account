exports.index=function (req,res) {
    res.render('index',{});
}

exports.account = function (req,res){
    //1,解析客户端提交的数据
    var username  = req.body.username;
    var email  = req.body.email;
    var pwd  = req.body.pwd;
    

    //2,向业务层要数据
    //(1),引入UserService模块
    var UseService = require('../Service/UseService');
    //(2),创建UserService对象
    var useService = new UseService();
    //(3),插入用户
    useService.insert(username,email,pwd,function(result){
        //3,把数据传给view
        res.end(JSON.stringify(result));
    });
    
}