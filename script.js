function submitForm(event){
    event.preventDefault();

    const first_name = document.getElementById("first-name").value;
    const last_name = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm-password").value;

    const password_error_message = document.getElementById("password-error-message");

    if(password != confirm_password){
        password_error_message.textContent = "*Passwords do not match!";
        return;
    }else{
        password_error_message.textContent = "";
    }

    const queryParams = "first-name=" + encodeURIComponent(first_name)
                            + "&last-name=" + encodeURIComponent(last_name)
                            + "&email=" + encodeURIComponent(email)
                            + "&phone-number=" + encodeURIComponent(phone_number)
                            + "&password=" + encodeURIComponent(CryptoJS.SHA256(password).toString());
    window.open("main.html?" + queryParams);
}

function validatePassword(){
    const password = document.getElementById("password").value;
    const reqs = document.getElementById("password-requirements");
    const submit = document.getElementById("submit-button");

    if(password === ""){
        for(let i = 0; i < reqs.children[1].children.length; i++){   
            reqs.children[1].children[i].style.color = "black";   
        }
        submit.disabled = true;
        return;                                                                                
    }

    let isValid = true;

    if(password.length < 8){
        reqs.children[1].children[0].style.color = "red";  
        isValid = false;                                                                                 
    }else{
        reqs.children[1].children[0].style.color = "green";
    }

    if(/(?=.*[A-Z])/.test(password)){
        reqs.children[1].children[1].style.color = "green";
    }else{
        reqs.children[1].children[1].style.color = "red";
        isValid = false;                                                                                 
    }

    if(/(?=.*[a-z])/.test(password)){
        reqs.children[1].children[2].style.color = "green";
    }else{
        reqs.children[1].children[2].style.color = "red";
        isValid = false;                                                                                 
    }

    if(/(?=.*[!@#$%^&*()])/.test(password)){
        reqs.children[1].children[3].style.color = "green";
    }else{
        reqs.children[1].children[3].style.color = "red";
        isValid = false;                                                                                 
    }

    if(/(?=.*\d)/.test(password)){
        reqs.children[1].children[4].style.color = "green";
    }else{
        reqs.children[1].children[4].style.color = "red";
        isValid = false;                                                                                 
    }

    if(isValid){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
}
