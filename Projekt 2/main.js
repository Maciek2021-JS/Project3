const slideList = [{
    img: "images/img1.jpg",
    text: "Pierwszy tekst"
}, {
    img: "images/img2.jpg",
    text: "Drugi tekst"
}, {
    img: "images/img3.jpg",
    text: "Trzeci tekst"
}];

const slide = document.querySelector("img.slider");
const sentence = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

let active = 0;
const time = 3000;


const modulo = () => {
    const activeDots = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDots].classList.remove("active");
    dots[active].classList.add("active");
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    slide.src = slideList[active].img;
    sentence.textContent = slideList[active].text;
    modulo()
}

let indexAdd = setInterval(changeSlide, time)

const turnSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexAdd);
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }

    }
    slide.src = slideList[active].img;
    sentence.textContent = slideList[active].text;
    modulo()
    indexAdd = setInterval(changeSlide, time);
}


window.addEventListener("keydown", turnSlide)