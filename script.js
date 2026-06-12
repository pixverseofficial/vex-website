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

const aboutLink = document.querySelector('a[href="about.html"]');

if(aboutLink){

    aboutLink.addEventListener("click", function(e){

        e.preventDefault();

        document
            .querySelector(".page-transition")
            .classList.add("active");

        setTimeout(() => {

            window.location.href = "about.html";

        }, 800);

    });

}
