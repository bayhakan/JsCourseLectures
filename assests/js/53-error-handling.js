document.querySelector("#frmLogin").addEventListener("submit", (e)=>{
    e.preventDefault();

    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if(!isEmail(email)) throw("Geçerli bir eposta giriniz"); 
        if(!password) throw("Şifre boş geçilemez"); 



        document.querySelector("#frmLogin").submit();



    } catch (error) {
       alert(error);
    }
});


function isEmail(email){
    let reg = /\S+@\S+\.\S{2,5}$/;
    return reg.test(email);

}