// Toggle menu mobile
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

// Load semua section
async function loadSection(id, file){
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  // Inisialisasi slider setelah section dimuat
  if(id === "home-section") initHeroSlider(); // init slider hero
  if(id === "produk-section") initProdukSlider(); // init produk slider
}

// Panggil loadSection
loadSection("home-section", "home.html");
loadSection("about-section", "about.html");
loadSection("produk-section", "produk.html");
loadSection("order-section", "order.html");
loadSection("kontak-section", "kontak.html");

// ========== HERO SLIDER ==========
function initHeroSlider(){
  let slides = document.querySelectorAll(".slider img");
  let dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  setInterval(()=>{
    index = (index+1)%slides.length;
    showSlide(index);
  }, 4000);

  dots.forEach((dot,i)=>{
    dot.onclick = () => { index=i; showSlide(i); }
  });
}

// ========== PRODUK SLIDER ==========
function initProdukSlider() {
  const slider = document.getElementById("sliderProduk");
  if(!slider) return; // jaga-jaga kalau slider belum dimuat

  window.slideLeft = function(){
    slider.scrollBy({ left: -250, behavior: 'smooth' });
  }

  window.slideRight = function(){
    slider.scrollBy({ left: 250, behavior: 'smooth' });
  }
}

