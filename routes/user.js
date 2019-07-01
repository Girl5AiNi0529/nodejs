const express = require('express');

const pool = require('../pool.js');

var router = express.Router();

router.post('/reg',function(req,res){


		var obj = req.body;


		pool.query('INSERT INTO emp SET ?',[obj],function(err,result){
		
			if(result.affectedRows>0){
			
				res.send({code:200,msg:'yes'});
			
			}else{
			
				res.send({code:400,msg:'no'});
			
			}
		
		
		
		})



})

module.exports = router;