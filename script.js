const cardslide = document.querySelector(".wrapper")


cardslide.addEventListener("mouseover", ()=>{
    cardslide.style.overflowX = "auto"
})

cardslide.addEventListener("mouseleave", ()=>{
    cardslide.style.overflowX = "hidden"
})


 // Menus
 const cclose = document.querySelector("#close")
 const hamburger = document.querySelector(".hamburger");
 const links = document.querySelector(".links")

 // add class 'left'
 hamburger.addEventListener("click", ()=>{
   links.classList.toggle("left")
 })

 //remove class 'left'
 cclose.addEventListener("click", ()=>{
   links.classList.remove("left")
 })







