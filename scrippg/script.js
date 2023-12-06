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

const bottom = document.querySelector('.bottom1');
fetch('http://localhost:3000/robots')
  .then(response => response.json()) 
  .then(data => {
    data.forEach(robot => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML += `
        <div class="img">
          <img src="${robot.image}" alt="" />
        </div>
        <div class="text">
          <h5>${robot.name}</h5>
          <p>${robot.p}</p>
          <button>
            <a href="./dataesehtml/navfoot.html?id=${robot.id}">VIEW MORE</a>
          </button>  
          <button onclick="deleterobot(${robot.id})">Delete</button>  
        </div>
      `;
      bottom.appendChild(card);
    })
  })

  function deleterobot (id){
    console.log(id);
    axios.delete(`http://localhost:3000/robots/${id}`)
window.location.reload()
  }






  // {
  //   "robots":[
  //   {
  //       "id":1,
  //       "image":"../photo/p1.png.webp",
  //       "name":"The Upper eye",
  //       "p":"Who are in extremely love with eco friendly system.",
  //       "button":"VIEW DETAILS"
  //   },
  //   {
  //       "id":2,
  //       "image":"../photo/p2.png.webp",
  //       "name":"The Crab Wheel",
  //       "p":"Who are in extremely love with eco friendly system.",
  //       "button":"VIEW DETAILS"
  //   },
  //   {
  //       "id":3,
  //       "image":"../photo/p3.png.webp",
  //       "name":"The Plug Ninja",
  //       "p":"Who are in extremely love with eco friendly system.",
  //       "button":"VIEW DETAILS"
  //   },
  //   {
  //       "id":4,
  //       "image":"../photo/p4.png.webp",
  //       "name":"The Controller",
  //       "p":"Who are in extremely love with eco friendly system.",
  //       "button":"VIEW DETAILS"
  //   }
    
  //   ]
  //   }
