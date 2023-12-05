let id=new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/robots/${id}`)
.then(reponse =>reponse.json())
.then(data=>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML= 
    `
    <div class="img">
<img src="${data.image}" alt="" />
</div>
<div class="text">
<h5>${data.name}</h5>
<p>${data.p}</p>
</div>
    `
    document.querySelector(".section1").append(card)
})