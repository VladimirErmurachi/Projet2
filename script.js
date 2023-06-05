const p1 = document.querySelector('.patrat')
const p2 = document.querySelector('.patrat2')
const p3 = document.querySelector('.patrat3')

p1.addEventListener('click', ()=>{
    p3.style.background = 'red'
})

p2.addEventListener('mouseover', ()=>{
    p1.style.background = 'blue'
})
p3.addEventListener('dblclick', ()=>{
    p2.style.background = 'green'
})

window.addEventListener('keydown',(ev)=>{
    if(ev.keyCode === 82){
        p1.style.background = getRandomColor()
        p2.style.background = getRandomColor()
        p3.style.background = getRandomColor()
      
    }
    else if (ev.keyCode === 49 ){
        p1.style.background = getRandomColor();
    }
    else if( ev.keyCode === 50){
        p2.style.background = getRandomColor()
    }
    else if(ev.keyCode === 51){
        p3.style.background = getRandomColor()
    }
    
    
})
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
getRandomColor(); 