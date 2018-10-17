
var express = require('express');
var app = express();
var path = require('path');
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置html引擎
app.engine('html', require('ejs').__express);
app.use(express.static('public'));

//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var accountControllers = require('./Controllers/accountControllers');
app.post('/index',urlencodedParser,accountControllers.account);
app.get('/index',accountControllers.index);
app.get('/location',function(req,res){
    res.render('location',{})
   
});
app.get('/404',function(req,res){
    res.render('404',{})
   
});
app.get('/specials',function(req,res){
    res.render('specials',{})
   
});
app.get('/login',function(req,res){
    res.render('login',{})
   
});
app.get('/account',function(req,res){
    res.render('account',{})
   
});
app.get('/checkout',function(req,res){
    res.render('checkout',{})
   
});
app.get('/contact',function(req,res){
    res.render('contact',{})
   
});
app.get('/single',function(req,res){
    res.render('single',{})
   
});


app.listen(8089);