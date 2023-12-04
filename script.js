let nav=document.querySelector("nav");

let menu=document.querySelector("#click")

window.onscroll=()=>{

    const scrolled = window.scrollY;

    if (scrolled > 50){
        nav.style.background="rgb(133, 133, 198)";
        nav.style.padding="20px 0"
    }

    else{
        nav.style.padding="32px 0"
        nav.style.backgroundColor="transparent"
    }

}