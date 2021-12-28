function Ampliar_imagenes()
{
    let imags = document.querySelectorAll("span.imagenes");

    for(let imag of imags)
        imag.addEventListener("click", function(e){

            this.classList.toggle("expand");
        }, false);
}
