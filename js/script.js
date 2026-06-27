
// ======================================
// BOX7 Moto Point
// Script Principal
// ======================================

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            destino.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Efeito no Header

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(!header) return;

    if(window.scrollY>80){

        header.classList.add("ativo");

    }else{

        header.classList.remove("ativo");

    }

});

console.log("BOX7 Moto Point carregado.");
