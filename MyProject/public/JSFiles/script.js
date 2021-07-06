function validate_login(){
    var user_id = document.getElementById("u_id");
    var password = document.getElementById("pass");

    if(user_id.value.trim() == "")
    {
        alert("Please Enter User Identity Number");
        return false;
    }
    else if(password.value.trim() == "")
    {
        alert("Please Enter Password");
        return false;
    }
    else
    {
        return true
    }
}

function validate_create_customer_acc(){
    var first_name = document.getElementById("fname");
    var midd_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email = document.getElementById("email");
    var residential_address = document.getElementById("address");
    var date_of_birth = document.getElementById("dob");
    var mobile_number = document.getElementById("mob_no");
    var alt_mobile_number = document.getElementById("alt_mob_no");
    var connection_date = document.getElementById("date_of_conn");
    var meter_id_no = document.getElementById("met_id");
    var branch_id = document.getElementById("br_id");
    var ward_number = document.getElementById("ward_no");
    var customer_id = document.getElementById("cust_id");
    var cust_password = document.getElementById("password");
    var confirm_cust_password = document.getElementById("cpass");
    var date1 = new Date();
    var date2 = new Date(date_of_birth.value); 
    var y1 = date1.getFullYear();
    var y2 = date2.getFullYear();
    var age = y1-y2;
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pattern = /[Cc][Ss][Tt][0-9][0-9][0-9]/;
    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("fst_name").style.visibility="visible";
        first_name.focus();
         return false;
    }
    else if(midd_name.value.trim()=="" || midd_name.value.trim().length<2)
    {
        midd_name.style.border="2px red solid";
        document.getElementById("mid_name").style.visibility="visible";
        midd_name.focus();
         return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("lst_name").style.visibility="visible";
        last_name.focus();
         return false;
    }
    else if(Email.value.trim()=="" || (email_pattern.test(Email.value) != 0))
    {
        Email.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("res_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(date_of_birth.value.trim()=="" || age<18)
    {
        date_of_birth.style.border="2px red solid";
        document.getElementById("dt_of_birth").style.visibility="visible";
        date_of_birth.focus();
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alt_mobile_number.value.trim()=="" || alt_mobile_number.value.trim().length<10)
    {
        alt_mobile_number.style.border="2px red solid";
        document.getElementById("alt_mob_number").style.visibility="visible";
        alt_mobile_number.focus(); 
        return false;
    }
    else if(connection_date.value.trim()=="")
    {
        connection_date.style.border="2px red solid";
        document.getElementById("conn_date").style.visibility="visible";
        connection_date.focus(); 
        return false;
    }
    else if(meter_id_no.value.trim()=="" || meter_id_no.value.trim().length<5)
    {
        meter_id_no.style.border="2px red solid";
        document.getElementById("meter_id").style.visibility="visible";
        meter_id_no.focus();
        return false;
    }
    else if(branch_id.value.trim()=="" || branch_id.value.trim().length<5)
    {
        branch_id.style.border="2px red solid";
        document.getElementById("branch_id").style.visibility="visible";
        branch_id.focus(); 
        return false;
    }
    else if(ward_number.value.trim()=="" || ward_number.value.trim().length>2)
    {
        ward_number.style.border="2px red solid";
        document.getElementById("wrd_no").style.visibility="visible";
        ward_number.focus(); 
        return false;
    }
    else if(customer_id.value.trim()=="" || customer_id.value.trim().length<7)
    {
        customer_id.style.border="2px red solid";
        document.getElementById("cst_id").style.visibility="visible";
        customer_id.focus(); 
        return false;
    }
    else if(!pattern.test(cust_id.value))
    {
        cust_id.style.border="2px red solid";
        document.getElementById("cst_id").style.visibility="visible";
        cust_id.focus(); 
        return false;
    }
    else if(cust_password.value.trim()=="" || cust_password.value.trim().length<5)
    {
        cust_password.style.border="2px red solid";
        document.getElementById("cust_password").style.visibility="visible";
        cust_password.focus(); 
        return false;
    }
    else if(confirm_cust_password.value.trim()=="" || confirm_cust_password.value.trim().length<5 || cust_password.value != confirm_cust_password.value)
    {
        confirm_cust_password.style.border="2px red solid";
        document.getElementById("con_cust_password").style.visibility="visible";
        confirm_cust_password.focus(); 
        return false;
    }
    else
    {
        return true;
    }
}
function validate_create_emp_acc(){
    var first_name = document.getElementById("fname");
    var midd_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email = document.getElementById("email");
    var residential_address = document.getElementById("address");
    var date_of_birth = document.getElementById("dob");
    var gender = document.getElementById("sex");
    var mobile_number = document.getElementById("mob_no");
    var alt_mobile_number = document.getElementById("alt_mob_no");
    var joining_date = document.getElementById("date_of_join");
    var emp_salary = document.getElementById("salary");
    var branch_id = document.getElementById("br_id");
    var location_id = document.getElementById("loc_id");
    var emp_id_no = document.getElementById("emp_id");
    var emp_password = document.getElementById("password");
    var confirm_emp_password = document.getElementById("epass");
    var date1 = new Date();
    var date2 = new Date(date_of_birth.value); 
    var y1 = date1.getFullYear();
    var y2 = date2.getFullYear();
    var age = y1-y2;
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pattern = /[Ee][Mm][Pp][0-9][0-9][0-9]/;
    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("fst_name").style.visibility="visible";
        first_name.focus();
         return false;
    }
    else if(midd_name.value.trim()=="" || midd_name.value.trim().length<2)
    {
        midd_name.style.border="2px red solid";
        document.getElementById("mid_name").style.visibility="visible";
        midd_name.focus();
         return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("lst_name").style.visibility="visible";
        last_name.focus();
         return false;
    }
    else if(Email.value.trim()=="" || (email_pattern.test(Email.value) != 0))
    {
        Email.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("res_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(date_of_birth.value.trim()=="" || age<18)
    {
        date_of_birth.style.border="2px red solid";
        document.getElementById("dt_of_birth").style.visibility="visible";
        date_of_birth.focus();
        return false;
    }
    else if(gender.value.trim()=="")
    {
        gender.style.border="2px red solid";
        document.getElementById("emp_gender").style.visibility="visible";
        gender.focus();
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alt_mobile_number.value.trim()=="" || alt_mobile_number.value.trim().length<10)
    {
        alt_mobile_number.style.border="2px red solid";
        document.getElementById("alt_mob_number").style.visibility="visible";
        alt_mobile_number.focus(); 
        return false;
    }
    else if(joining_date.value.trim()=="")
    {
        joining_date.style.border="2px red solid";
        document.getElementById("join_date").style.visibility="visible";
        joining_date.focus(); 
        return false;
    }
    else if(emp_salary.value.trim()=="")
    {
        emp_salary.style.border="2px red solid";
        document.getElementById("sal").style.visibility="visible";
        emp_salary.focus();
        return false;
    }
    else if(location_id.value.trim()=="" || location_id.value.trim().length<5)
    {
        location_id.style.border="2px red solid";
        document.getElementById("location_id_no").style.visibility="visible";
        location_id.focus(); 
        return false;
    }
    else if(branch_id.value.trim()=="" || branch_id.value.trim().length<5)
    {
        branch_id.style.border="2px red solid";
        document.getElementById("branch_id").style.visibility="visible";
        branch_id.focus(); 
        return false;
    }
    else if(emp_id_no.value.trim()=="" || emp_id_no.value.trim().length<7)
    {
        emp_id_no.style.border="2px red solid";
        document.getElementById("employee_id").style.visibility="visible";
        emp_id_no.focus(); 
        return false;
    }
    else if(!pattern.test(emp_id_no.value))
    {
        emp_id_no.style.border="2px red solid";
        document.getElementById("employee_id").style.visibility="visible";
        emp_id_no.focus(); 
        return false;
    }
    else if(emp_password.value.trim()=="" || emp_password.value.trim().length<5)
    {
        emp_password.style.border="2px red solid";
        document.getElementById("emp_password").style.visibility="visible";
        emp_password.focus(); 
        return false;
    }
    else if(confirm_emp_password.value.trim()=="" || confirm_emp_password.value.trim().length<5 || cust_password.value != confirm_cust_password.value)
    {
        confirm_emp_password.style.border="2px red solid";
        document.getElementById("con_emp_password").style.visibility="visible";
        confirm_emp_password.focus(); 
        return false;
    }
    else
    {
        return true;
    }
}


function validate_change_cust_details(){
    var custo_id = document.getElementById("c_id");
    var loct_id = document.getElementById("location_id");
    var brch_id = document.getElementById("branch_id");
    var dt_of_birth = document.getElementById("dobc");
    var meter_id = document.getElementById("m_id");
    var dt_of_connection = document.getElementById("docc");

    var date1 = new Date();
    var date2 = new Date(dt_of_birth.value); 
    var y1 = date1.getFullYear();
    var y2 = date2.getFullYear();
    var age = y1-y2;
    var pattern = /[Cc][Ss][Tt][0-9][0-9][0-9]/;
    
    if(custo_id.value.trim()=="" || custo_id.value.trim().length<7)
    {
        custo_id.style.border="2px red solid";
        document.getElementById("cust_id").style.visibility="visible";
        custo_id.focus(); 
        return false;
    }
    else if(!pattern.test(custo_id.value))
    {
        custo_id.style.border="2px red solid";
        document.getElementById("cust_id").style.visibility="visible";
        custo_id.focus(); 
        return false;
    }
    
    else if(loct_id.value.trim()=="" || loct_id.value.trim().length<5)
    {
        loct_id.style.border="2px red solid";
        document.getElementById("loc_id").style.visibility="visible";
        custo_id.focus(); 
        return false;
    }
    
    else if(brch_id.value.trim()=="" || brch_id.value.trim().length<5)
    {
        brch_id.style.border="2px red solid";
        document.getElementById("br_id").style.visibility="visible";
        brch_id.focus(); 
        return false;
    }
    
    else if(dt_of_birth.value.trim()=="" || age<18)
    {
        dt_of_birth.style.border="2px red solid";
        document.getElementById("dob").style.visibility="visible";
        dt_of_birth.focus(); 
        return false;
    }
    
    else if(meter_id.value.trim()=="" || meter_id.value.trim().length<5)
    {
        meter_id.style.border="2px red solid";
        document.getElementById("mtr_id").style.visibility="visible";
        meter_id.focus(); 
        return false;
    }
   
    else if(dt_of_connection.value.trim()=="")
    {
        dt_of_connection.style.border="2px red solid";
        document.getElementById("dt_of_conn").style.visibility="visible";
        dt_of_connection.focus(); 
        return false;
    }

    else{
        return true
    }

}


function validate_change_employee_details(){
    var emp_id = document.getElementById("e_id");
    var loc_id = document.getElementById("location_id");
    var br_id = document.getElementById("branch_id");
    var dt_of_birth = document.getElementById("dobe");
    var salary = document.getElementById("saly");
    var dt_of_join = document.getElementById("dojc");

    var date1 = new Date();
    var date2 = new Date(dt_of_birth.value); 
    var y1 = date1.getFullYear();
    var y2 = date2.getFullYear();
    var age = y1-y2;
    var pattern = /[Ee][Mm][Pp][0-9][0-9][0-9]/;


    if(emp_id.value.trim()=="" || emp_id.value.trim().length<7)
    {
        emp_id.style.border="2px red solid";
        document.getElementById("em_id").style.visibility="visible";
        emp_id.focus(); 
        return false;
    }
    else if(!pattern.test(emp_id.value))
    {
        emp_id.style.border="2px red solid";
        document.getElementById("em_id").style.visibility="visible";
        emp_id.focus(); 
        return false;
    }

    else if(loc_id.value.trim()=="" || loc_id.value.trim().length<7)
    {
        loc_id.style.border="2px red solid";
        document.getElementById("lc_id").style.visibility="visible";
        loc_id.focus(); 
        return false;
    }
    else if(br_id.value.trim()=="" || br_id.value.trim().length<5)
    {
        br_id.style.border="2px red solid";
        document.getElementById("brc_id").style.visibility="visible";
        br_id.focus(); 
        return false;
    }
    else if(dt_of_birth.value.trim()=="" || age<18)
    {
        dt_of_birth.style.border="2px red solid";
        document.getElementById("dob").style.visibility="visible";
        dt_of_birth.focus(); 
        return false;
    }
    else if(salary.value.trim()=="")
    {
        salary.style.border="2px red solid";
        document.getElementById("sal").style.visibility="visible";
        salary.focus(); 
        return false;
    }
    else if(dt_of_join.value.trim()=="")
    {
        dt_of_join.style.border="2px red solid";
        document.getElementById("doj").style.visibility="visible";
        dt_of_join.focus(); 
        return false;
    }
    else{
        return true;
    }

}


function validate_change_pass_for_customer(){
    var customer_id = document.getElementById("cust_id");
    var old_pswrd = document.getElementById("old_password");
    var new_pswrd = document.getElementById("new_password");
    var conf_new_pswrd = document.getElementById("confirm_password");
    
    var pattern = /[Cc][Ss][Tt][0-9][0-9][0-9]/;
    if(customer_id.value.trim()=="" || customer_id.value.trim().length<5)
    {
        customer_id.style.border="2px red solid";
        document.getElementById("cst_id").style.visibility="visible";
        customer_id.focus(); 
        return false;
    }
    else if(!pattern.test(customer_id.value))
    {
        customer_id.style.border="2px red solid";
        document.getElementById("cust_id").style.visibility="visible";
        customer_id.focus(); 
        return false;
    }
    if(old_pswrd.value.trim()=="" || old_pswrd.value.trim().length<5)
    {
        old_pswrd.style.border="2px red solid";
        document.getElementById("old_pass").style.visibility="visible";
        old_pswrd.focus(); 
        return false;
    }
    if(new_pswrd.value.trim()=="" || new_pswrd.value.trim().length<5)
    {
        new_pswrd.style.border="2px red solid";
        document.getElementById("new_pass").style.visibility="visible";
        new_pswrd.focus(); 
        return false;
    }
    else if(conf_new_pswrd.value.trim()=="" || conf_new_pswrd.value.trim().length<5 || new_pswrd.value != conf_new_pswrd.value)
    {
        conf_new_pswrd.style.border="2px red solid";
        document.getElementById("con_new_pass").style.visibility="visible";
        conf_new_pswrd.focus(); 
        return false;
    }
   else{
       return true;
   }
}

function validate_change_pass_for_emp(){
    var employee_id = document.getElementById("emp_id");
    var old_pswrd = document.getElementById("old_password");
    var new_pswrd = document.getElementById("new_password");
    var conf_new_pswrd = document.getElementById("confirm_password");
    
    var pattern = /[Ee][Mm][Pp][0-9][0-9][0-9]/;
    if(employee_id.value.trim()=="" || employee_id.value.trim().length<5)
    {
        employee_id.style.border="2px red solid";
        document.getElementById("em_id").style.visibility="visible";
        employee_id.focus(); 
        return false;
    }
    else if(!pattern.test(employee_id.value))
    {
        employee_id.style.border="2px red solid";
        document.getElementById("em_id").style.visibility="visible";
        employee_id.focus(); 
        return false;
    }
    if(old_pswrd.value.trim()=="" || old_pswrd.value.trim().length<5)
    {
        old_pswrd.style.border="2px red solid";
        document.getElementById("old_pass").style.visibility="visible";
        old_pswrd.focus(); 
        return false;
    }
    if(new_pswrd.value.trim()=="" || new_pswrd.value.trim().length<5)
    {
        new_pswrd.style.border="2px red solid";
        document.getElementById("new_pass").style.visibility="visible";
        new_pswrd.focus(); 
        return false;
    }
    else if(conf_new_pswrd.value.trim()=="" || conf_new_pswrd.value.trim().length<5 || new_pswrd.value != conf_new_pswrd.value)
    {
        conf_new_pswrd.style.border="2px red solid";
        document.getElementById("con_new_pass").style.visibility="visible";
        conf_new_pswrd.focus(); 
        return false;
    }
    
   else{
       return true;
   }
}


function validate_complain(){
    var c_name = document.getElementById("name");
    var customer_id = document.getElementById("cust_id");
    var complain = document.getElementById("message");
    var pattern = /[Cc][Ss][Tt][0-9][0-9][0-9]/;

    if(c_name.value.trim()=="" || c_name.value.trim().length<2)
    {
        c_name.style.border='2px red solid';
        document.getElementById("cust_name").style.visibility="visible";
        c_name.focus();
        return false;
    }
    else if(customer_id.value.trim()=="" || customer_id.value.trim().length<7)
    {
        customer_id.style.border='2px red solid';
        document.getElementById("c_id").style.visibility="visible";
        customer_id.focus();
        return false;
    }
    else if(!pattern.test(customer_id.value))
    {
        cust_id.style.border="2px red solid";
        document.getElementById("c_id").style.visibility="visible";
        cust_id.focus(); 
        return false;
    }
    else if(complain.value.trim()=="" || complain.value.trim().length<25)
    {
        complain.style.border='2px red solid';
        document.getElementById("msg").style.visibility="visible";
        complain.focus();
        return false;
    }
    else{
        return true;
    }
}
function validate_edit_profile_for_admin() {
    var first_name  = document.getElementById("fname");
    var middle_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email_id = document.getElementById("email");
    var residential_address = document.getElementById("res_address");
    var mobile_number = document.getElementById("mob_no");
    var alternate_number = document.getElementById("alt_mob_no");
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("f_name").style.visibility="visible";
        first_name.focus(); 
        return false;
    }
    else if(middle_name.value.trim()=="" || middle_name.value.trim().length<2)
    {
        middle_name.style.border="2px red solid";
        document.getElementById("m_name").style.visibility="visible";
        middle_name.focus(); 
        return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("l_name").style.visibility="visible";
        last_name.focus(); 
        return false;
    }
    else if(Email_id.value.trim()=="" || (email_pattern.test(Email_id.value) != 0))
    {
        Email_id.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email_id.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("r_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alternate_number.value.trim()=="" || alternate_number.value.trim().length<10)
    {
        alternate_number.style.border="2px red solid";
        document.getElementById("alt_no").style.visibility="visible";
        alternate_number.focus(); 
        return false;
    }
    else{
        return true
    }

}

function validate_edit_profile_for_customer() {
    var first_name  = document.getElementById("fname");
    var middle_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email_id = document.getElementById("email");
    var residential_address = document.getElementById("res_address");
    var mobile_number = document.getElementById("mob_no");
    var alternate_number = document.getElementById("alt_mob_no");
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("f_name").style.visibility="visible";
        first_name.focus(); 
        return false;
    }
    else if(middle_name.value.trim()=="" || middle_name.value.trim().length<2)
    {
        middle_name.style.border="2px red solid";
        document.getElementById("m_name").style.visibility="visible";
        middle_name.focus(); 
        return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("l_name").style.visibility="visible";
        last_name.focus(); 
        return false;
    }
    else if(Email_id.value.trim()=="" || (email_pattern.test(Email_id.value) != 0))
    {
        Email_id.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email_id.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("r_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alternate_number.value.trim()=="" || alternate_number.value.trim().length<10)
    {
        alternate_number.style.border="2px red solid";
        document.getElementById("alt_no").style.visibility="visible";
        alternate_number.focus(); 
        return false;
    }
    else{
        return true
    }

}


function validate_edit_profile_for_customer() {
    var first_name  = document.getElementById("fname");
    var middle_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email_id = document.getElementById("email");
    var residential_address = document.getElementById("res_address");
    var mobile_number = document.getElementById("mob_no");
    var alternate_number = document.getElementById("alt_mob_no");
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("f_name").style.visibility="visible";
        first_name.focus(); 
        return false;
    }
    else if(middle_name.value.trim()=="" || middle_name.value.trim().length<2)
    {
        middle_name.style.border="2px red solid";
        document.getElementById("m_name").style.visibility="visible";
        middle_name.focus(); 
        return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("l_name").style.visibility="visible";
        last_name.focus(); 
        return false;
    }
    else if(Email_id.value.trim()=="" || (email_pattern.test(Email_id.value) != 0))
    {
        Email_id.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email_id.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("r_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alternate_number.value.trim()=="" || alternate_number.value.trim().length<10)
    {
        alternate_number.style.border="2px red solid";
        document.getElementById("alt_no").style.visibility="visible";
        alternate_number.focus(); 
        return false;
    }
    else{
        return true
    }

}

function validate_edit_profile_for_operator() {
    var first_name  = document.getElementById("fname");
    var middle_name = document.getElementById("mname");
    var last_name = document.getElementById("lname");
    var Email_id = document.getElementById("email");
    var residential_address = document.getElementById("res_address");
    var mobile_number = document.getElementById("mob_no");
    var alternate_number = document.getElementById("alt_mob_no");
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(first_name.value.trim()=="" || first_name.value.trim().length<2)
    {
        first_name.style.border="2px red solid";
        document.getElementById("f_name").style.visibility="visible";
        first_name.focus(); 
        return false;
    }
    else if(middle_name.value.trim()=="" || middle_name.value.trim().length<2)
    {
        middle_name.style.border="2px red solid";
        document.getElementById("m_name").style.visibility="visible";
        middle_name.focus(); 
        return false;
    }
    else if(last_name.value.trim()=="" || last_name.value.trim().length<2)
    {
        last_name.style.border="2px red solid";
        document.getElementById("l_name").style.visibility="visible";
        last_name.focus(); 
        return false;
    }
    else if(Email_id.value.trim()=="" || (email_pattern.test(Email_id.value) != 0))
    {
        Email_id.style.border="2px red solid";
        document.getElementById("e_mail").style.visibility="visible";
        Email_id.focus(); 
        return false;
    }
    else if(residential_address.value.trim()=="" || residential_address.value.trim().length<10)
    {
        residential_address.style.border="2px red solid";
        document.getElementById("r_address").style.visibility="visible";
        residential_address.focus(); 
        return false;
    }
    else if(mobile_number.value.trim()=="" || mobile_number.value.trim().length<10)
    {
        mobile_number.style.border="2px red solid";
        document.getElementById("mob_number").style.visibility="visible";
        mobile_number.focus(); 
        return false;
    }
    else if(alternate_number.value.trim()=="" || alternate_number.value.trim().length<10)
    {
        alternate_number.style.border="2px red solid";
        document.getElementById("alt_no").style.visibility="visible";
        alternate_number.focus(); 
        return false;
    }
    else{
        return true
    }

}

function delete_customer() {
    var customer_id  = document.getElementById("cust_id");
    var branch_id = document.getElementById("br_id");
    var ward_number = document.getElementById("ward_no");
    var pattern = /[Cc][Ss][Tt][0-9][0-9][0-9]/;

    if(customer_id.value.trim()=="" || customer_id.value.trim().length<7)
    {
        customer_id.style.border="2px red solid";
        document.getElementById("c_id").style.visibility="visible";
        customer_id.focus(); 
        return false;
    }
    else if(!pattern.test(cust_id.value))
    {
        cust_id.style.border="2px red solid";
        document.getElementById("c_id").style.visibility="visible";
        cust_id.focus(); 
        return false;
    }
    else if(branch_id.value.trim()=="" || branch_id.value.trim().length<5)
    {
        branch_id.style.border="2px red solid";
        document.getElementById("b_id").style.visibility="visible";
        branch_id.focus(); 
        return false;
    }
    
    else if(ward_number.value.trim()=="" || ward_number.value.trim().length>2)
    {
        ward_number.style.border="2px red solid";
        document.getElementById("w_number").style.visibility="visible";
        ward_number.focus(); 
        return false;
    }
   
    else{
        return true
    }

}

function delete_employee() {
    var employee_id  = document.getElementById("emp_id");
    var branch_id = document.getElementById("br_id");
    var pattern = /[Ee][Mm][Pp][0-9][0-9][0-9]/;

    if(employee_id.value.trim()=="" || employee_id.value.trim().length<7)
    {
        employee_id.style.border="2px red solid";
        document.getElementById("e_id").style.visibility="visible";
        employee_id.focus(); 
        return false;
    }
    else if(!pattern.test(employee_id.value))
    {
        employee_id.style.border="2px red solid";
        document.getElementById("e_id").style.visibility="visible";
        employee_id.focus(); 
        return false;
    }
    else if(branch_id.value.trim()=="" || branch_id.value.trim().length<5)
    {
        branch_id.style.border="2px red solid";
        document.getElementById("b_id").style.visibility="visible";
        branch_id.focus(); 
        return false;
    }
   
    else{
        return true
    }

}
function validate_generate_bills() {
    var meter_id  = document.getElementById("mtr_id");
    var meter_reding = document.getElementById("meter_reading");

    if(meter_id.value.trim()=="" || meter_id.value.trim().length<5)
    {
        meter_id.style.border="2px red solid";
        document.getElementById("m_id").style.visibility="visible";
        meter_id.focus(); 
        return false;
    }
    else if(meter_reding.value.trim()=="")
    {
        meter_reding.style.border="2px red solid";
        document.getElementById("m_no").style.visibility="visible";
        meter_reding.focus(); 
        return false;
    }
   
    else{
        return true
    }

}