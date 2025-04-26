let btn_draw = document.querySelector('.but')
let field_container =document.querySelector('.field-container') 

function scrollDown(e) {
    e.preventDefault()
    field_container.style.display = 'flex'
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

btn_draw.addEventListener('click', scrollDown)

let CURRENT_COLOR = 'blue'
  let DEFAULT_COLOR = 'white'


let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `cell${i}`)
    field.appendChild(cell)
    
}

let IS_CLICKET = false


document.addEventListener('mousedown',function(){
    IS_CLICKET = true
})

document.addEventListener('mouseup',function(){
    IS_CLICKET = false
})



let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
          if (IS_CLICKET) {
            cell.style.backgroundColor = CURRENT_COLOR
          }
    })
    cell.addEventListener('mousedown', function (){
        cell.style.backgroundColor = CURRENT_COLOR
    })
})


let yellow = document.querySelector('.yellow')
yellow.addEventListener('click', function(){
    CURRENT_COLOR = ' yellow'
          let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    yellow.classList.add('selected')
})



let blue = document.querySelector('.blue')
blue.addEventListener('click', function(){
    CURRENT_COLOR = 'blue'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    blue.classList.add('selected')
})



let green = document.querySelector('.green')
green.addEventListener('click', function(){
    CURRENT_COLOR = 'green'
      let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    green.classList.add('selected')
})



let red = document.querySelector('.red')
red.addEventListener('click', function(){
    CURRENT_COLOR = 'red'
      let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    red.classList.add('selected')
})


let black = document.querySelector('.black')
black.addEventListener('click', function(){
    CURRENT_COLOR = 'black'
          let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    black.classList.add('selected')
})

let eraise = document.querySelector('.l')
eraise.addEventListener('click',function(){
  CURRENT_COLOR = DEFAULT_COLOR
   
})
document.querySelector('.s').addEventListener('click', function(){
   domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})

