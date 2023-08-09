const buttons = document.querySelectorAll(".toggleButton");
const sections = document.querySelectorAll(".section");
buttons.forEach((button, index)=>{
    button.addEventListener("click", ()=>{
        sections[index].classList.remove("visible");
        sections[index].classList.add("hidden");
        const nextIndex = (index + 1) % sections.length;
        sections[nextIndex].classList.remove("hidden");
        sections[nextIndex].classList.add("visible");
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//   // активация слайдера
//   new ItcSimpleSlider('.itcss', {
//     loop: false,
//     autoplay: true,
//     swipe: true
//   });
// });
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;
function updateSlidesPosition() {
    for (let slide of slides){
        slide.classList.remove("carousel__item--visible");
        slide.classList.add("carousel__item--hidden");
    }
    slides[slidePosition].classList.add("carousel__item--visible");
}
function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) slidePosition = 0;
    else slidePosition++;
    updateSlidesPosition();
}
function moveToPrevSlide() {
    if (slidePosition === 0) slidePosition = 0;
    else slidePosition--;
    updateSlidesPosition();
}
let btnNext = document.getElementsByClassName("btn-next");
btnNext.addEventListener("click", moveToNextSlide());

//# sourceMappingURL=index.44983732.js.map
