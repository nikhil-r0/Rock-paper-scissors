image = document.querySelector('img');
function animate(image){
    const animationTime = 1800;
    let start = Date.now();
    image.style.transformOrigin = 'bottom left';
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if(timePassed >= animationTime){
            clearInterval(timer);
            return;
        }
    
        swing(timePassed,image);
    },20);
}

function swing(timePassed,image){
    let deg = 0;
    if(timePassed<900){
        deg = -timePassed/10;
    }
    else if(timePassed < 1800){
        deg = timePassed/20 - 90;
    }
    console.log(deg);
    image.style.transform = 'rotate('+deg+'deg)';
}
animate(image);
setTimeout(function (){
    animate(image);
},1900);

