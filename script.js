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

const robotic = [
    { name: 'The Crab Wheel', price: 'VIEW DETAILS',p:'Who are in extremely love with eco friendly system.', imageSrc: 'p1.png.webp' },
    { name: 'The Crab Wheel',price: 'VIEW DETAILS',p:'Who are in extremely love with eco friendly system.', imageSrc: 'https://preview.colorlib.com/theme/robotics/img/p2.png' },
    { name: 'The Crab Wheel',price: 'VIEW DETAILS',p:'Who are in extremely love with eco friendly system.', imageSrc: 'https://preview.colorlib.com/theme/robotics/img/p3.png' },
    { name: 'The Crab Wheel', price: 'VIEW DETAILS',p:'Who are in extremely love with eco friendly system.', imageSrc: 'https://preview.colorlib.com/theme/robotics/img/p4.png' }
  ];
  
  
  const bottom = document.querySelector('.bottom1');
  
  
robotic.forEach(robot => {
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = `
        <div class="img">
          <img src="${robot.imageSrc}" alt="" />
        </div>

        <div class="text">


        <h5>${robot.name}</h5>
        <p>${robot.p}</p>
        <button>${robot.price}</button>
        </div>
      `;
  
    bottom.appendChild(card);
  });