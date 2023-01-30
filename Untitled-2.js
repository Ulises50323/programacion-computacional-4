//conatANTES DEL BOTON OCULTAR Y EL DIV//
const hidebtn = document.querySelector('#hideElements')
const listdiv = document.querySelector('#list')

//agregar evento alboton hidebtn
hidebtn.addEventListener('click', ()=>{
    if(listdiv.style.display == 'none'){
     listdiv.style.display='block'
     hidebtn.textContent='Ocultar'
    } else{
     listdiv.style.display = 'none'
     hidebtn.textContent = 'Mostrar'
    }


})

//Agregar elementos a la lista
const addIteminput = document.querySelector('#addItem')
const addItembutton = document.querySelector('button#addItemButton')

addItembutton.addEventListener('click', () =>{
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addIteminput.value
    list.appendChild(li)


})