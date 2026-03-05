const form = document.getElementById("registerForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(passwordValue !== confirmPasswordValue){
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }
    alert("Đăng ký thành công!");
});