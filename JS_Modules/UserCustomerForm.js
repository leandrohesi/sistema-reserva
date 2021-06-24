document.getElementById("Error").style.display="none";
document.getElementById("own").addEventListener("click",owner);
document.getElementById("cust").addEventListener("click",customer);
document.getElementById("button").addEventListener("click",validation);

function owner(){
    if(document.getElementById("own").checked==true)
        document.getElementById("hotel").style.display="block";
}
function customer(){
    if(document.getElementById("cust").checked==true)
        document.getElementById("hotel").style.display="none";
}

function validation(){
    var check = 0;
    //user input
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var uname=document.getElementById("uname").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var pass=document.getElementById("pass").value;
    var cpass=document.getElementById("cpass").value;
    var credit=document.getElementById("credit").value; 

    //Regex for user input
    const name = /^[a-zA-Z]+[a-zA-Z]*$/;
    const user_name = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
    const email_check=/^[a-zA-Z0-9]+(@hotmail.com)$|^[a-zA-Z0-9]+(@gmail.com)$|^[a-zA-Z0-9]+(@yahoo.com)$/;
    const pass_check=/^[\w]{8,}/;
    const phone_check=/^[0-9]{11}$/;
    const credit_check = /^[0-9]{4}(-)[0-9]{4}(-)[0-9]{4}(-)[0-9]{4}$/;
    
    //check validation of input
    if(!name.test(fname)){
        document.getElementById("fn").innerHTML="-Invalid First name";
         check++;
    }else document.getElementById("fn").innerHTML="";

    if(!name.test(lname)){
        document.getElementById("ln").innerHTML="-Invalid Last name";
        check++;
   }else document.getElementById("ln").innerHTML="";
   if (! user_name.test(uname)){
    document.getElementById("cs").innerHTML="-Invalid User name";
    check++;
   }else document.getElementById("cs").innerHTML="";

   if(!phone_check.test(phone)){
    document.getElementById("ph").innerHTML="-Invalid phone number";
    check++;
   }else document.getElementById("ph").innerHTML="";
   
   if(!credit_check.test(credit)){
    document.getElementById("cc").innerHTML="-Invalid credit card";
    check++;
   }else document.getElementById("cc").innerHTML="";

   if(!email_check.test(email)){
    document.getElementById("em").innerHTML="-Invalid Email";
    check++;
   }else document.getElementById("em").innerHTML="";
    if(!pass_check.test(pass)){
     document.getElementById("pa").innerHTML="-Invalid Password";
     check++;
    }else document.getElementById("pa").innerHTML="";
    if(pass!=cpass){
    document.getElementById("pa1").innerHTML="-Password doesn't match";
     check++;
    }else document.getElementById("pa1").innerHTML="";
   if(check>0){
      document.getElementById("Error").style.display="block";
   console.log("false"+check);
    return false;
   }
   else {console.log("true"); document.getElementById("Error").style.display="none"; return true;}
}