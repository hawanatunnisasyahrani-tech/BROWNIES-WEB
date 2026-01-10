function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

// HERO SLIDER
function initHeroSlider(){
  const slides = document.querySelectorAll(".hero-slider img");
  let index = 0;

  function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  setInterval(()=>{
    index = (index + 1) % slides.length;
    showSlide(index);
  },4000);
}


