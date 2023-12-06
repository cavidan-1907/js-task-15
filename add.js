let form=document.querySelector(".form");
let name=document.querySelector("#name");
let category=document.querySelector("#category");
let image=document.querySelector("#image");



form.addEventListener("submit",function(event){
 
event.preventDefault()
let obj={}

let src=image.files[0]
const reader=new FileReader();
reader.onload=function (e) {
    obj={
image:e.target.result,
name:name.value,
p:category.value
    }
    axios.post("http://localhost:3000/robots",obj).then(res=> console.log(res.data))
}

reader.readAsDataURL(src);
window.location="../index.html"
})
