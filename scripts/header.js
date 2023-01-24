const hamburger = document.querySelector("#hamburger");
const popout = document.querySelector(".popout");
const heading = document.querySelector("#jonathan");

hamburger.addEventListener("click", () => {
    if (heading.style.display == "none") {
        heading.style.display = "block";
        popout.classList.add("hidden");
        return
    }

    if (window.innerHeight < 600) {
        heading.style.display = "none";
    }

    popout.classList.toggle("hidden");
})