const cartButton = document.getElementById("cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function(){
    modal.classList.add("is-open");
});
close.addEventListener("click", function(){
    modal.classList.remove("is-open");
});

new WOW().init()