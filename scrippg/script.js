let nav = document.querySelector("nav");
let menu = document.querySelector("#click");
let modal = document.querySelector(".modal-bg");
let close = document.querySelector(".close");

menu.addEventListener('click', () => {
  if (window.innerWidth > 991) {
    modal.style.display = "none";
  } else {
    if (modal.style.display === "none") {
      modal.style.display = "block";
      menu.style.width = "160px";
    } else {
      modal.style.display = "none";
      menu.style.width = "auto"; 
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  }
});

close.addEventListener('click', () => {
  modal.style.display = "none";
});













window.onscroll = () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgb(133, 133, 198)";
    nav.style.padding = "20px 0";
  } else {
    nav.style.padding = "32px 0";
    nav.style.backgroundColor = "transparent";
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
          <button onclick="deleteData(${robot.id})">
            <a href="./dataesehtml/navfoot.html?id=${robot.id}">${robot.button}</a>
          </button>    
        </div>
      `;
      bottom.appendChild(card);
    })
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
