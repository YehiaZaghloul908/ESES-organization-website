document.querySelector("#contactUs").addEventListener("click", () => {
    document.querySelector("footer").scrollIntoView();
});
document.querySelector("#founders").addEventListener("click", () => {
    document.querySelector("#ownerSectionInner").scrollIntoView({
        block: "center",
    });
});
document.querySelector("#catrinaDropdown").addEventListener("click", () => {
    document.querySelector("#catrinaSectionInner").scrollIntoView({
        block: "center",
    });
});
document.querySelector("#conferencesDropdown").addEventListener("click", () => {
    document.querySelector("#conferencesSectionInner").scrollIntoView({
        block: "center",
    });
});
document.querySelector("#catrina").addEventListener("click", () => {
    window.location.href = "https://cat.journals.ekb.eg/";
});
document.querySelector("#membership").addEventListener("click", () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdmY37plWyQOS83FzgdujhbMFun2MuZVxIJabevAglfocsiTg/viewform?usp=dialog";
});
window.addEventListener("scroll", () => {
    let container = document.querySelectorAll(".SectionTextDiv");
    container.forEach(container => {
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (containerPosition < screenPosition) {
            container.classList.add("animate");
        }
    });
});
window.addEventListener("scroll", () => {
    let img = document.querySelector("#abdelraoufImage");
    let container = document.querySelector("#ownerSectionInner");
    let containerPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (containerPosition < screenPosition) {
        img.classList.add("animate");
    }
});
window.addEventListener("scroll", () => {
    let img = document.querySelector("#catrinaPoster");
    let container = document.querySelector("#catrinaSectionInner");
    let containerPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (containerPosition < screenPosition) {
        img.classList.add("animate");
    }
});
window.addEventListener("scroll", () => {
    let img = document.querySelector("#conferenceCollectiveStaffPhoto");
    let container = document.querySelector("#conferencesSectionInner");
    let containerPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    if (containerPosition < screenPosition) {
        img.classList.add("animate");
    }
});
window.addEventListener("scroll", () => {
    let container = document.querySelector("#staff-section");
    let img = document.querySelectorAll(".staff-photo");
    let name = document.querySelectorAll(".staff-names");
    let containerPosition = container.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    img.forEach(img => {
        if (containerPosition < screenPosition) {
            img.classList.add("animate");
        }
    });
    name.forEach(name => {
        if (containerPosition < screenPosition) {
            name.classList.add("animate");
        }
    });
});
document.querySelector("#conferencesLeftSlider").addEventListener("click", () => {
    document.querySelector("#conferencesSectionInner").classList.remove("rightSlide");
    document.querySelector("#conferencesSectionInner").classList.add("leftSlide");
    document.querySelector("#the9thInternConContainer").classList.remove("rightSlide");
    document.querySelector("#the9thInternConContainer").classList.add("leftSlide");
});
document.querySelector("#conferencesRightSlider").addEventListener("click", () => {
    document.querySelector("#conferencesSectionInner").classList.remove("leftSlide");
    document.querySelector("#conferencesSectionInner").classList.add("rightSlide");
    document.querySelector("#the9thInternConContainer").classList.remove("leftSlide");
    document.querySelector("#the9thInternConContainer").classList.add("rightSlide");
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('#interactionList');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});