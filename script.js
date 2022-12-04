register=()=>{
    acnoDetails={
        acno:reg_ph.value,
        uname:reg_name.value,
        pswd:reg_pswd.value,
        email:reg_email.value,
        qual:reg_qual.value,
    }
    if(acnoDetails.email in localStorage){
        alert("Email already exists")
    }else{
        localStorage.setItem(acnoDetails.email,JSON.stringify(acnoDetails));
        alert('Resiter successfully');
        window.location.href="./index.html"
    }
}

logIn=()=>{
    email=log_email.value;
    pswd=log_pswd.value;
    if(email in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(email));
        if(pswd==acnoDetails.pswd){
            alert('Login successfull');
            window.location="./luminar.html"
        }else{
            alert('Incorrect Password');
            
        }
    }else{
        alert('Incorrect Email');
    }

}