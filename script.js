window.addEventListener('scroll',function(){

var imagen = document.querySelectorAll('.fade_up');




for(var i = 0; i < imagen.length; i++ ){

    var altura = window.innerHeight/1.3;

    var distancia = imagen[i].getBoundingClientRect().top;
    
    
    imagen[i].classList.add('transform_up')
    
    
    if(distancia <= altura){
    
    
    imagen[i].classList.add('show')
    
    
    }
    
    else {
    
    imagen[i].classList.remove('show')
    
    }
    

}



});


var boton = document.getElementById('boton');
var pdfContainer = document.getElementById('pdf-container');
var botonO = document.getElementById('boton-o');


boton.addEventListener('click', function(){

    
    var boton = document.getElementById('boton');

    pdfContainer.classList.remove('active-desaparece');
    pdfContainer.classList.add('active-aparece');
    // boton.style.transform = "translateY(1000px)";
    boton.style.display = "none";

// botonO.style.transform = "translateX(0)";
botonO.style.display = "block";
    
    

})

botonO.addEventListener('click', function()

{

var botonO = document.getElementById('boton-o');

pdfContainer.classList.remove('active-aparece');
pdfContainer.classList.add('active-desaparece');
// botonO.style.transform = "translateY(-1000px)";
botonO.style.display = "none";
// boton.style.transform = "translateX(0)";

boton.style.display = "block";
})





