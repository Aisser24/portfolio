const hamburger = document.querySelector("#hamburger");
const popout = document.querySelector(".popout");

hamburger.addEventListener("click", () => {
    popout.classList.toggle("hidden");
})
