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



close_btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.remove("active")
        btns.forEach(el => el.classList.remove("active__btn"))
    })
})




// mobile version

const main_desk = document.querySelector(".desktop")
const main_mob = document.querySelector(".mobile")

const mbtn = document.querySelector("#mbtn")

if (window.matchMedia("(max-width: 976px)").matches) {
    main_desk.classList.remove("active__screen")
    main_mob.classList.add("active__screen")
    main_mob.style.display = "block"


    mbtn.addEventListener("click", () => {

        document.querySelector(".mbg").style.position = "absolute"
        document.querySelector(".mbg").style.left = "-100vw"

    })
}

const btnMore = document.getElementById("more")
const btnPanel = document.querySelector("#m_panel")

btnMore.addEventListener("click", () => {
    if (btnPanel.classList.contains("active__panel")) {
        btnPanel.classList.remove("active__panel")
        btnMore.style.transform = "rotate3d(0, 1, 0, 0deg)"

    } else {
        btnPanel.classList.add("active__panel")
        btnMore.style.transform = "rotate3d(0, 1, 0, 180deg)"

    }
})