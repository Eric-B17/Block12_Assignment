function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    email.innerHTML = "";
    password.innerHTML = "";
    
    if(email === "" && password === ""){
        document.getElementById("error").innerText = "Email is required";
        document.getElementById("error2").innerText = "Password is required";
        return false;
    }
    
    else if (email === "") {
        document.getElementById("error").innerText = "Email is required";
        return false;
    }

    else if (password === "") {
        document.getElementById("error2").innerText = "Password is required";
        return false;
    }
    
    return true;
}