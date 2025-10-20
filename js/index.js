const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const fechaActual = new Date();
const year = fechaActual.getFullYear();
document.querySelector("#year").textContent = year;

//loader no seo friendly xd
document.addEventListener("DOMContentLoaded", () => {
//   const randomInt = Math.floor(Math.random() * 10) + 1;
  const loaderImg = document.getElementById("loader-img");
  loaderImg.src = `https://manhwaweb.com/assets/cargando/${2}.gif`;

  // Simula un tiempo de carga, por ejemplo 2s
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  }, 2000);
});
