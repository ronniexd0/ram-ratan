const left = document.querySelector(".left")
const right = document.querySelector(".right")
const btn = document.querySelector(".right button")
const btns = document.querySelectorAll(".panel .btn")

let behinds = document.querySelectorAll(".behind")


const close_btns = document.querySelectorAll(".close")


let isClicked = false
const toogleClick = () => isClicked === false ? isClicked = true : isClicked = false

btn.addEventListener("click", () => {
    left.style.left = "-70vw"
    left.style.opacity = "0"
    right.style.right = "-70vw"
    right.style.opacity = "0"

})


let active = false
for (let i = 0; i < 6; i++) {
    if (i !== 5) {
        btns[i].addEventListener("click", () => {

            if (!btns[i].classList.contains("active")) {
                if (active) {
                    behinds.forEach(el => el.classList.remove("active"))
                    btns.forEach(el => el.classList.remove("active__btn"))
                }
                document.querySelector(":root").style.setProperty("--Pseudo_green", "#64ffda")
                behinds[i + 1].classList.add("active")
                btns[i].classList.add("active__btn")
                active = true
            } else {
                behinds[i + 1].classList.remove("active")
                btns[i].classList.remove("active__btn")
                active = false
            }
        })
    }

}



console.log(close_btns)
close_btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.remove("active")
        btns.forEach(el => el.classList.remove("active__btn"))
    })
})