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