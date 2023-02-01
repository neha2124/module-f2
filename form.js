// alert("hello")
const form = document.getElementById("form")
const Name = document.getElementById("name")
const userName = document.getElementById("User-name") 
const email = document.getElementById("email")
// import secLink from "./script"

form.addEventListener("submit",(e)=>{
   
    validName()
    user()
    validEmail()
    if(validForm() === true){
       localStorage.setItem('name',Name.value)
       localStorage.setItem('user-name',userName.value)
       localStorage.setItem('email',email.value)
    //   secLink.classList.remove('hide')
       
    }else{
        e.preventDefault();
    }
   
})
function validForm (){
    const input = form.querySelectorAll(".input-group")
   let result = true
    input.forEach((cont) => {
        if(cont.classList.contains('error')){
            result= false;
        }

    })
    return result;
}

function  validName () {
    if(Name.value.trim() === ""){
        error(Name,"please enter your name ")
    }else if (Name.value.trim().length < 2){
        error(Name, "invalid name")
    }else{
        success(Name)
    }
}
function user(){
    if(userName.value.trim() == ""){
        error(userName,"please enter user name ")
    }else if (userName.value.trim().length < 2){
        error(userName, "invalid name")
    }else{
        success(userName)
    }
}
let validEmail = () => {
    let re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(re.test(email.value)){
      success(email)

    }else{
       error(email,'email is not valid')

    }
}


function error (element,message){
    let parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove("success")
    }
    parent.classList.add('error')
    const para = parent.querySelector("span")
       para.textContent=message

}
function success (element){
    let parent = element.parentElement
    if(parent.classList.contains("error")){
        parent.classList.remove("error")
    }
    parent.classList.add("success")


}