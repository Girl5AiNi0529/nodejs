//引入 express 模块
const  express = require('express');
//引入 bodyParser 模块
const  bodyParser = require('body-parser');

const  userRoute = require('./routes/user.js');
//实例化 express 服务器
var  app = express();
//监听 8082 端口
app.listen(8082);
//使用中间件托管静态文档到public文件夹
app.use(express.static('public'));
//使用中间件  不使用第三方qs模块
app.use(bodyParser.urlencoded({

		extended:false
	
}));

app.use('/user',userRoute);















