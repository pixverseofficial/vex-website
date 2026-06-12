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
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, .btn").forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});
