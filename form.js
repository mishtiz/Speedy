



 const seterror = (id,error)=>{
    let a = document.getElementById(id)
    a.getElementsByClassName("formerror")[0].innerHTML = error;
 }

 
// Function to validate the form input
function validateform(e) {
    e.preventDefault();
    // var returnal = true;
    //get the mail input value
    var mail = document.forms["myform"]["mail"].value;
    console.log(mail);
    
    // Get the name input value
    var name = document.forms["myform"]["username"].value;
    // Get the password input value
    console.log(name);
    
    var password = document.forms["myform"]["pass"].value;
    // Log the name input value to the console for debugging
    console.log(password);
    
    var box = document.forms["myform"]["box"];
    // Log the name input value to the console for debugging
    console.log(box);

    if(mail == ""){
        seterror("mail","Email cannot be empty")
        returnal = false;
    }else if(mail.indexOf("@") == 0){
        seterror("mail"," '@' cannot be placed at frist")
        returnal = false;
    }else if(mail.charAt(mail.length-10)!="@"){
        seterror("mail","invalid position '@' ");
        returnal = false;
    }else{
        seterror("mail","");
        returnal = true;
    }
    if(name == ""){
        seterror("name","UserName cannot be empty");
        returnal = false;
    }else if(name.length<6){
        seterror("name","Name should contain atleast 8 words");
        returnal = false;
    }else{
        seterror("name","");
        returnal = true;
    }
    if(password==""){
        seterror("pass","Password cannot be empty");
        returnal = false;
    }else if(password.length<8){
        seterror("pass","Password should contain atleast 8 words");
        returnal = false;
    }else{
        seterror("pass","");
        returnal = true;
    }
    if(!box.checked){
        seterror("check","Please check this box");
        returnal = false;
    }else if(box.checked){
        seterror("check","");
        returnal = true;
    } 
    const correct = document.querySelector('.sign-up-sucess');
    if(returnal == true){
        correct.innerHTML = name+" You have Registered Sucessfully in Speedy!";
        returnal = false;
    }

    document.querySelector('.log-link').addEventListener("click",()=>{
        correct.innerHTML = "";
    })
    
    // Return false to prevent the form from being submitted without validation
    // return returnal;
}


function validateloginform(e) {
    e.preventDefault();
    // var returnal = true;
    //get the mail input value
    // var mail = document.forms["myform"]["mail"].value;
    // console.log(mail);
    
    // Get the name input value
    var name = document.forms["form"]["username"].value;
    // Get the password input value
    console.log(name);
    
    var password = document.forms["form"]["pass"].value;
    // Log the name input value to the console for debugging
    console.log(password);
    



    if(name == ""){
        seterror("username","UserName cannot be empty");
        returnal = false;
    }else if(name.length<6){
        seterror("username","Name should contain atleast 8 words");
        returnal = false;
    }else{
        seterror("username","");
        returnal = true;
    }

    if(password==""){
        seterror("password","Password cannot be empty");
        returnal = false;
    }else if(password.length<8){
        seterror("password","Password should contain atleast 8 words");
        returnal = false;
    }else{
        seterror("password","");
        returnal = true;
    }




    
    const sucess = document.querySelector('.sign-up-sucess');
    if(returnal == true){
        sucess.innerHTML ="Welcome back to Speedy! " +name;
        returnal = false;
        
    }

    document.querySelector('.reg-link').addEventListener("click",()=>{
        sucess.innerHTML = "";
    })
    
    // Return false to prevent the form from being submitted without validation
    // return returnal;
}

