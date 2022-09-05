
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})
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

})




//hamburgericons animation ends 




