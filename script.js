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