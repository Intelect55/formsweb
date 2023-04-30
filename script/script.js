const elementos = document.querySelectorAll('[data-anime]');
const animacaoClass = '.anima';

function animeScroll(){
    const windowTop = window.pageYOffset +(( window.innerHeight*3)/4);
    elementos.forEach(function(elemento){
        if(windowTop > element.offsetTop){
            elemento.classList.add(animacaoClass);
        } else{
            elemento.classList.remove(animacaoClass);
        }
    });
};
if(elementos.length){
    window.addEventListener('scroll',function(){
        animeScroll();
    })
}
