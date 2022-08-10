const detalles=document.getElementById('btn-detalles')
detalles.addEventListener('click',()=>{
add_Atrributes();
})

function add_Atrributes(){
    detalles.setAttribute('data-bs-toggle','modal');
    detalles.setAttribute('data-bs-target','#staticBackdrop');
}