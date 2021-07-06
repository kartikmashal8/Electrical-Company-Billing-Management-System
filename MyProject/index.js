var express = require ('express');
var mysql = require ('mysql');
var app  = express();
var bodyparser = require('body-parser');
app.set('view engine','ejs');
// app.set('views', path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/public"));

var connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password : 'password',
	database :'test'
});
app.get("/",function(req,res){
	res.render('page11');
});

app.get("/about",function(req,res){
	res.render('about');
});

app.get("/contact",function(req,res){
	res.render('contact');
});

app.post("/contact",function(req,res){
	var person = {
		Name:req.body.name,
		Email:req.body.email,
		Comments:req.body.message
	};
	connection.query('INSERT INTO contact SET?',person,function(error,result){
		if (error) throw error;
		console.log(result);
	});
		res.render('work_done_successfully');
});

app.get("/login",function(req,res){
	res.render('login');
});

app.post("/login",function(req,res){
	var id = req.body.id;
	var password = req.body.password;
	var id2 = id.toUpperCase();
	var identity = id2.substring(0,3);
	if(identity=="CST")
		{
			var q = "select c.first_name,c.middle_name,c.last_name,c.customer_id,c.branch_id,c.email_id,c.mob_number,c.ward_number,c.meter_id,c.password,e.first_name as adm_name,e.last_name as adm_lastname,b.loc_id,e.admin_id from customer c,employee e,branch b where c.branch_id=b.branch_id  and b.loc_id=e.loc_id and e.admin_id!='NULL'";
			connection.query(q,function(error,result){
				if(error) throw error;
				for(var i=0;i<result.length;i++)
					{
						if(result[i].customer_id==id2 && result[i].password==password)
							{
								res.render('login_as_customer',{data : result,cid :result[i].customer_id});
								break;
							}
						else
						res.render('work_unsuccessful');
					}
			});
		}
	if(identity=="EMP")
		{
			var q = 'select * from employee;';
			connection.query(q,function(error,result){
				if(error) throw error;
				console.log(result);
				for(var i=0;i<result.length;i++)
					{
						if(result[i].emp_id==id2 && result[i].password==password)
							{
								if(result[i].admin_id!="NULL")
									{
										res.render('login_as_admin',{data : result,eid : result[i].emp_id});
										break;
									}
								else if(result[i].admin_id=="NULL")
									{
										res.render('login_as_operator',{data : result,eid : result[i].emp_id});
										break;
									}
							}
						else
							res.render('work_unsuccessful');
					}
			});
		}
	if(identity=="OPR")
		{
			console.log(id+" "+password+" "+identity+" "+id2);
		}
});

app.get("/edit_profile_for_customer/:cid",function(req,res){
	res.render('edit_profile_for_customer',{cid:req.params.cid});
});
	
app.post("/edit_profile_for_customer/:cid",function(req,res){
		var a ='UPDATE customer SET first_name =?,middle_name =?,last_name =?,email_id =?,address =?,mob_number =?,alt_mob_number =? WHERE customer_id =?';
	connection.query(a, [req.body.fname,req.body.mname,req.body.lname,req.body.email,req.body.res_address,req.body.mob_no,req.body.alt_mob_no,req.params.cid], function (error, result){
		if(error) throw error;
		console.log(result);
	});
	res.render('work_done_successfully'); 
});

app.get("/change_password_for_customer/:cid",function(req,res){
	res.render('change_password_for_customer',{cid:req.params.cid});
});

app.post("/change_password_for_customer/:cid",function(req,res){
	var q = 'SELECT password FROM customer WHERE customer_id =?';
	connection.query(q,req.params.cid, function(error,result){
		if(result=req.body.old_password)
			{
				var r = 'UPDATE customer SET password =? WHERE customer_id =?';
				connection.query(r,[req.body.new_password,req.params.cid], function(error,result){
					if(error)
						res.render('work_unsuccessful');
					else
						res.render('work_done_successfully');
				});
			}
		else
			res.render('work_unsuccessful');
	});
});

app.get("/complain/:cid",function(req,res){
	res.render('complain',{cid:req.params.cid});
});

app.post("/complain/:cid",function(req,res){
	var cmpln={
		customer_id:req.params.cid,
		complaint:req.body.message
	};
	connection.query('INSERT INTO complain SET?', cmpln,function(error,result){
		if(error)
			console.log(error);
		else
			res.render('work_done_successfully');
	});
});

app.get("/history/:cid",function(req,res){
	var q = 'select m.billing_date,m.total_amount,m.mode_of_payment,m.due_date,m.paid_date from meter m,customer c where c.customer_id =? and c.meter_id=m.meter_id';
	connection.query(q,req.params.cid, function(error,result){
		if(error) throw error;
		res.render('history',{data : result});
	});      	
});


app.listen(2000,function(){
	console.log("server listining at port 2000:");
});