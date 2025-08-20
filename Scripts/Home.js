document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#contactUs").addEventListener("click", () => {
        document.querySelector("#footer").scrollIntoView();
    });
    document.querySelector("#founders").addEventListener("click", () => {
        document.querySelector("#ownerSection").scrollIntoView({
            block: "center",
        });
    });
    document.querySelector("#catrinaDropdown").addEventListener("click", () => {
        document.querySelector("#catrinaSection").scrollIntoView({
            block: "center",
        });
    });
    document.querySelector("#conferencesDropdown").addEventListener("click", () => {
        document.querySelector("#conferencesSection").scrollIntoView({
            block: "center",
        });
    });
    document.querySelector("#catrina").addEventListener("click", () =>{
        window.location.href = "https://cat.journals.ekb.eg/";
    });
    document.querySelector("#membership").addEventListener("click", () => {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdmY37plWyQOS83FzgdujhbMFun2MuZVxIJabevAglfocsiTg/viewform?usp=dialog";
    });
    window.addEventListener("scroll", () => {
        let img = document.querySelector("#abdelraoufImage");
        let container = document.querySelector("#ownerSectionInner");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            img.classList.add("animate");
        }
    });
    window.addEventListener("scroll", () => {
        let img = document.querySelector("#catrinaPoster");
        let container = document.querySelector("#catrinaSectionInner");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            img.classList.add("animate");
        }
    });
    window.addEventListener("scroll", () => {
        let container = document.querySelector("#ownerSectionTextDiv");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            container.classList.add("animate");
        }
    });
    window.addEventListener("scroll", () => {
        let container = document.querySelector("#catrinaSectionTextDiv");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            container.classList.add("animate");
        }
    });
    window.addEventListener("scroll", () => {
        let img = document.querySelector("#conferenceCollectivePhoto");
        let container = document.querySelector("#conferencesSectionInner");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            img.classList.add("animate");
        }
    });
    window.addEventListener("scroll", () => {
        let container = document.querySelector("#conferencesSectionTextDiv");
        let containerPosition = container.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if(containerPosition < screenPosition){
            container.classList.add("animate");
        }
    });
});