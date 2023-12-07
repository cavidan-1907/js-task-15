let nav = document.querySelector("nav");
let menu = document.querySelector("#click");
let modal = document.querySelector(".modal-bg");
let close = document.querySelector(".close");
let arrow = document.querySelector(".arrow");
let arrowBottom = document.querySelector(".ArrowBottom");
menu.addEventListener('click', () => {
  if (window.innerWidth > 991) {
    modal.style.display = "none";
  } else {
    if (modal.style.display === "none") {
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        modal.querySelector(".modal-menu").style.left = "0";
      }, 100);
    } else {
      modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
      modal.querySelector(".modal-menu").style.left = "-30%";
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  }
});

close.addEventListener('click', () => {
  modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
  modal.querySelector(".modal-menu").style.left = "-30%";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});












window.onscroll = () => {
  if (window.scrollY > 50) {
    nav.style.background = "#8a90ffe6";
    arrow.style.display="block";
    arrowBottom.style.display="none";
    nav.style.padding = "20px 0";
    arrow.addEventListener("click",()=>{

      window.scrollTo({
                top: 0,
                behavior: "smooth" 
            })  
          });
  } else {
    nav.style.padding = "32px 0";
    arrow.style.display="none";
    arrowBottom.style.display="block";
    nav.style.backgroundColor = "transparent";
    arrowBottom.addEventListener("click", () => {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
      });
  });
  }
};

let page=4;
function showData(){

const bottom = document.querySelector('.bottom1');
fetch('http://localhost:3000/robots')
  .then(response => response.json()) 
  .then(data => {
    data.slice(page-4,page).forEach(robot => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML += `
        <div class="img">
          <img src="${robot.image}" alt="" />
        </div>
        <div class="text">
          <h5>${robot.name}</h5>
          <p>${robot.p}</p>
        
            <a href="./dataesehtml/navfoot.html?id=${robot.id}"> <button>VIEW MORE  </button></a>
        
          <button onclick="deleterobot(${robot.id})">Delete</button>  

          <button onclick="editRobot(${robot.id})">Uptade</button> 
        </div>
      `;
      bottom.appendChild(card);
    })
  })
}
let form1=document.querySelector(".form1");
let uptade=document.querySelector(".uptade");
let name1=document.querySelector("#name1");
let category1=document.querySelector("#category1");
let image1=document.querySelector("#image1");
let none=document.querySelector(".x");



function editRobot(id){
  uptade.style.display="block";
  none.addEventListener("click",(e)=>{
    e.preventDefault();
    uptade.style.display="none";
    });
    form1.addEventListener("submit",function(event){
      event.preventDefault()
   
        axios.get(`http://localhost:3000/robots/${id}`).then(res=> console.log(res.data))
        let src1=image1.files[0]
        const reader1=new FileReader();

        reader1.onload=function (e) { 
      const   obj1={
          name:name1.value,
          p:category1.value,
          image:e.target.result
        }
        console.log(obj1);
        axios.patch(`http://localhost:3000/robots/${id}`,obj1).then(res=> console.log(res.data))
}
reader1.readAsDataURL(src1);
});

}

showData()
  function deleterobot (id){
    console.log(id);
    axios.delete(`http://localhost:3000/robots/${id}`)
window.location.reload()
  }

let showBtn=document.querySelector(".showBtn");

showBtn.addEventListener("click",()=>{
  page+=4;
  showData();
  event.target.style.display="none";
})



