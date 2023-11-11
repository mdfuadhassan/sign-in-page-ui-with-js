const form = document.querySelector("form");
const userName = form.querySelector("div #userName");
const password = form.querySelector("div #passWord");


form.addEventListener("submit", (e)=>{

    e.preventDefault();
    alert("Login Successful");

});

