// * It prints a text on the center sign and flashes it.
// * Parameter: the string to be printed.
function sign(text){
    
    ban.style.background="#bc1717";
    ban.firstChild.textContent = text;
    
    setTimeout(function(){
        
        ban.style.background="#3881af";
        
        setTimeout(function(){
            
            ban.style.background="#bc1717";
            
            setTimeout(function(){
                
                ban.style.background="radial-gradient(farthest-corner at 80% 70%,#a3a33a -50%, #eed 70%)";
            }, 150);
        }, 150);
    }, 150);
}

// * It reload the window location after playing the click sound.
// * Parameter: none.
function page_reload(){
    click_sound.addEventListener("ended", function(){window.location.reload()}, false);
    click_sound.play();
}

// * It interrupts the playing sound. It is useful when the user fires continuously without waiting for the response of the machine.
// * Parameter: none.
function audio_pause(){
	click_sound.pause();
    click_sound.currentTime = 0;
    water_sound.pause();
    water_sound.currentTime = 0;
    bang_sound.pause();
    bang_sound.currentTime = 0;
}