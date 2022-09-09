
let header = document.querySelector(".header");
document.addEventListener("scroll", function () {
  if (window.scrollY > 1) {

    header.classList.add("headerActive")
  }
  else {
    header.classList.remove("headerActive")
  }



})

//hamburgericons animation starts
const iconAll = document.querySelector('.icon__divs')

const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const icon3 = document.querySelector('.icon3')
let hamburgerdrop = document.querySelector('.hamburgerdrop')

iconAll.addEventListener("click", () => {
  if (iconAll.classList.contains("iconDivsActive")) {
    iconAll.classList.remove("iconDivsActive")
    icon1.classList.remove("icon1Active")
    icon2.classList.remove("icon2Active")
    icon3.classList.remove("icon3Active")

  } else {
    iconAll.classList.add("iconDivsActive")
    icon1.classList.add("icon1Active")
    icon2.classList.add("icon2Active")
    icon3.classList.add("icon3Active")

  }
  hamburgerdrop.classList.toggle('hamburgeractive')

})




//hamburgericons animation ends


// $(document).ready(function(){
//   $(window).scroll(function(){
//     console.log($(Window).scrollTop());
//   })
// }) 

let scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("active")
    scrollTop.addEventListener('click', () => {
      document.body.scrollTop = 0;
    })
  }
  else {
    scrollTop.classList.remove("active")
  }
})

let list = document.querySelectorAll(".list")
let doubleUl = document.querySelectorAll(".double-ul")
list.forEach((list1) => {
  list1.addEventListener("click", function () {
    list1.querySelector(".double-ul").classList.toggle("listactive")
    list1.querySelector("i").classList.toggle("iactive")
  })
}) 