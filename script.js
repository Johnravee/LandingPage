const cardslide = document.querySelector(".wrapper")

 // Menus
 const cclose = document.querySelector("#close")
 const hamburger = document.querySelector(".hamburger");
 const links = document.querySelector(".links")
 const linkItem = document.querySelectorAll(".link-item")

cardslide.addEventListener("mouseover", ()=>{
    cardslide.style.overflowX = "auto"
})

cardslide.addEventListener("mouseleave", ()=>{
    cardslide.style.overflowX = "hidden"
})




 // add class 'left'
 hamburger.addEventListener("click", ()=>{
   links.classList.toggle("left")
   document.body.classList.toggle("antiScroll")
 })

 //remove class 'left'
 cclose.addEventListener("click", ()=>{
   links.classList.remove("left")
   document.body.classList.remove("antiScroll")
 })
 

linkItem.forEach(item =>{

  item.addEventListener('click', ()=>{
    links.classList.remove("left")
    document.body.classList.remove("antiScroll")
  })
})






