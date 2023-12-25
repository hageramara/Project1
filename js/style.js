//var text=window.prompt('what is your favourite programmig language?') 
//document.getElementById('items').innerHTML=text



let userName =document.getElementById('name')
let userEmail =document.getElementById('email')
let userSubject =document.getElementById('subject')
let massege=document.getElementById('text')
let btn =document.getElementById('submit')
let detailes =[]

function data(){
    let user = {
        name:userName.value,
        email:userEmail.value,
        subject:userSubject.value
    }
    console.log(user)
    detailes.push(user)
    console.log(detailes)
}

btn.addEventListener('click',function (){
    data()
})