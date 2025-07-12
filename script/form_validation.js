function signUpValidation(event){
    event.preventDefault(); // Prevents the page from reloading

    var form = document.forms['signUpForm'];
    var fName = form['fName'].value ;
    var lName = form['lName'].value ;
    var email = form['email'].value ;
    var password1 = form['password1'].value ;
    var password2 = form['password2'].value ;
    
    var isValid = false;
    
    if(fName == ""){
        form['fName'].style.borderColor = "red";
        msg = document.getElementById("fnameError");
        msg.innerText = "Enter a valid first name";

        isValid = false;
        
    }
    else{
         // only if fname has no error controls come to this block 
        // so converting the border color back to black and 
        //  removing the error msg
        form['fName'].style.borderColor = "black";
        msg = document.getElementById("fnameError");
        msg.innerText = "";

        isValid = true;
    }


    if(lName == ""){
        form['lName'].style.borderColor = "red";
        msg = document.getElementById("lnameError");
        msg.innerText = "Enter a valid last name";
        isValid = false;
        
    }
    else{
        form['lName'].style.borderColor = "black";
        msg = document.getElementById("lnameError");
        msg.innerText = "";
        isValid = true;
    }
    
    if(email == ""){
        form['email'].style.borderColor = "red";
        msg = document.getElementById("emailError");
        msg.innerText = "Enter a valid email";
        isValid = false;
        
    }
    else{
        form['email'].style.borderColor = "black";
        msg = document.getElementById("emailError");
        msg.innerText = "";
        isValid = true;
    }

    if(password1 == ""){
        form['password1'].style.borderColor = "red";
        msg = document.getElementById("password1Error");
        msg.innerText = "Enter a valid password";
        isValid = false;
        
    }
    else{
        form['password1'].style.borderColor = "black";
        msg = document.getElementById("password1Error");
        msg.innerText = "";
        isValid = true;
    }

    if(password2 == ""){
        form['password2'].style.borderColor = "red";
        msg = document.getElementById("password2Error");
        msg.innerText = "Enter a valid password";
        isValid = false;
        
    }
    else{
        form['password2'].style.borderColor = "black";
        msg = document.getElementById("password2Error");
        msg.innerText = "";
        isValid = true;
    }

    if(password1 != password2){
        form['password2'].style.borderColor = "red";
        msg = document.getElementById("password2Error");
        msg.innerText = "Password did not match";
        isValid = false;
    }

    if(password1==password2 && password2!=""){
        form['password2'].style.borderColor = "black";
        msg = document.getElementById("password2Error");
        msg.innerText = "";
        isValid = true;
    }


    if (isValid){
        var confirmation = confirm("Do you really want to submit?");

        if(confirmation){
            form.submit();
        }
    }
}

