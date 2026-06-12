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
.page-transition{
    position:fixed;
    inset:0;
    background:#050505;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:99999;
    opacity:0;
    pointer-events:none;
    transition:.3s;
}

.page-transition img{
    width:250px;
    opacity:0;
}

.page-transition.active{
    opacity:1;
}

.page-transition.active img{
    animation:logoTransition .8s ease forwards;
}

@keyframes logoTransition{

    0%{
        transform:scale(.5);
        opacity:0;
    }

    40%{
        transform:scale(1);
        opacity:1;
    }

    100%{
        transform:scale(1.3);
        opacity:0;
    }

}
