let nav=document.querySelector("nav");

let menu=document.querySelector("#click")

window.onscroll=()=>{
    if (window.scrollY> 50){
        nav.style.background="rgb(133, 133, 198)";
        nav.style.padding="20px 0"
    }
    else{
        nav.style.padding="32px 0"
        nav.style.backgroundColor="transparent"
    }
}
  const bottom = document.querySelector('.bottom1');
  fetch('http://localhost:3000/robots')
  .then(reponse =>reponse.json())
  .then(data=>{
    data.forEach(robot=>{
      const card = document.createElement('div');
      card.classList.add('card');
card.innerHTML+=`
<div class="img">
<img src="${robot.image}" alt="" />
</div>
<div class="text">
<h5>${robot.name}</h5>
<p>${robot.p}</p>
<button onclick="deleteData(${robot.id})"> <a href="./dataesehtml/navfoot.html?id=${robot.id}">   ${robot.button} </a></button>    
</div>
`
bottom.appendChild(card);
    })
  })