var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(".navbar-navigation").toggleClass("menu");
  })
  $(".fa-xmark").click(function(){
    $(".navbar-navigation").toggleClass("menu");
  })
})

AOS.init();

let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},100)

})