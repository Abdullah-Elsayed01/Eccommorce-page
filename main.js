let displayImg = document.querySelector(".display-image img");
let displayImages = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".previous");
let increment = document.querySelector(".inc");
let decrement = document.querySelector(".dec");
let counter = document.querySelector(".count span");
let final = document.querySelector(".final");
let orderCount = document.querySelector(".order-count");
let addToCart = document.querySelector(".add-to-cart");
let trashIcon = document.querySelector(".trash-icon");
let summary = document.querySelector(".summary");
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let menuIcon = document.querySelector(".menu");
let sideBar = document.querySelector(".sidebar");
let closeIcon = document.querySelector(".close");
let i = 0;
nextButton.onclick = () => {
  while (i < 3) {
    i++
    displayImg.src = displayImages[i];
    break;
  }
}
prevButton.onclick = () => {
  while (i > 0) {
    --i
    displayImg.src = displayImages[i];
    break;
  }
}
increment.onclick = () => {
  counter.innerHTML++
}
decrement.onclick = () => {
  if (counter.innerHTML != 0) {
    --counter.innerHTML;
  }
}
addToCart.onclick = () => {
  let finalOrder = counter.innerHTML;
  orderCount.innerHTML = finalOrder;
  final.innerHTML = finalOrder;
  summary.style.display = "flex"
  counter.innerHTML = "0";
}
cartIcon.onclick = () => {
  cart.classList.toggle("active");
}
trashIcon.onclick = () => {
  summary.style.display = "none";
  orderCount.innerHTML = "0";
  final.innerHTML = "0";
}
menuIcon.onclick = () => {
  sideBar.classList.toggle("active");
}
closeIcon.onclick = () => {
  sideBar.style.display = "none";
  sideBar.classList.remove("active");
}
// const media = matchMedia('(mix-width: 376px)');
// const main = document.querySelector("main");
// media.addEventListener("change", main.classList.remove("container"))