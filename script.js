const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){
item.classList.add("active");
}

});

});

const counters = document.querySelectorAll(".count");

let started = false;

window.addEventListener("scroll", () => {

const section = document.querySelector(".counter-section");

if(!section) return;

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100 && !started){

started = true;

counters.forEach(counter => {

const target = +counter.dataset.target;

let current = 0;

const speed = target / 50;

const update = () => {

current += speed;

if(current < target){

counter.innerText = Math.floor(current);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

});

}

});

// POPUP FORM

function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function sendWhatsApp() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const brand = document.getElementById("brand").value;
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value;

    const message =
`*NEW PROJECT REQUEST*

Name: ${name}
Email: ${email}
Phone: ${phone}
Brand: ${brand}

Service: ${service}

Project Details:
${details}`;

    const whatsappNumber = "918891404464";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
