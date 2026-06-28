/*==========================================
 BOX7 Moto Point
 script.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    headerScroll();
    smoothScroll();
    revealAnimation();

});

/*==============================
 Header Inteligente
==============================*/

function headerScroll(){

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){
            header.classList.add("scroll");
        }else{
            header.classList.remove("scroll");
        }

    });

}

/*==============================
 Scroll Suave
==============================*/

function smoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

}

/*==============================
 Scroll Reveal
==============================*/

function revealAnimation(){

    const itens = document.querySelectorAll(
        ".card, .ebook-card, .depoimento, .faq-item, .consultoria, .mentoria"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });

    },{

        threshold:0.2

    });

    itens.forEach(item => observer.observe(item));

}
