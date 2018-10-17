function UseService(){
    this.insert = function(username,email,pwd,call){
    var resData={
        insertId:-1,
        msg:''
    }
    //(1)引入UseDao模块
    var UseDao = require('../Dao/UseDao');
    //(2)创建对象
    var useDao = new UseDao();
    useDao.init();
    useDao.selectUserByName(username,function(result){
        //1,获得数组的长度
         var length = result.length;
         if(length==0){
             //(2)长度为0，说明用户不存在，就插入用户数据
             useDao.insertUser(username,email,pwd,function (data) {
                 resData.msg="注册成功";
                 resData.insertId=data.insertId;
 
                 call(resData);
             })
         }else{
             //(3)长度不为0，说明用户存在，给用户提示
             resData.msg="用户已经存在！"
             call(resData);
         }
     })
    }
}
module.exports=UseService;