let Total = 0;
console.log("Hola");
function sumarprecio(valorproducto) {
  Total = Total + valorproducto;
  document.getElementById("Total").innerHTML =
    "TOTAL: " + "$" + Total + " Pesos";
}   

function Borrar() {
  Total = 0;
  document.getElementById("Total").innerHTML = "TOTAL:"  + " $" + 0 + " Pesos";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;}

  if (n < 1) {
    slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";}

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}