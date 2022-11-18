const btn_detalles_vizper = document.getElementById("btn-detalles-vizper");
const btn_detalles_sukarne = document.getElementById("btn-detalles-sukarne");
const btn_detalles_demo_helpdesk = document.getElementById(
  "btn-detalles-demo-helpdesk"
);
const btn_enviar = document.getElementById("btn_enviar");
const contenedor_Detalles = document.getElementById("modal-body-detalles");
const iframe_body=document.getElementById('iframe_body');
const btn_skill = document.querySelectorAll('.btn_skill');

function setContact(form) {
  const contactForm = new FormData(form);
  fetch("./api/api_contact.php", {
    method:"POST",
    body: contactForm,
  }).then((response) => response.text())
    .then((response) => {
      console.log(response);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Enviado",
      });
      form.reset();
      for (i = 0; i < validacion.length; i++) {
        validacion[i].classList.remove("is-invalid");
      }
    });
}

function listDetailVizper() {
  const detalle_Vizper = `  <ul>                      
<li>Año: 2017</li>     
<li>Leguaje: C#</li>
<li>Modelo de programación: Programación orientada a objetos.</li>
<li>Trabajo de animación de Sprite y uso de gif para enemigos.</li>
<li>Uso de Canvas para el menu principal, menu superior y menu final.</li>
<li>Uso de Collider y programación de personaje principal y comportamiento de enemigos.</li>
<li>Programación de contador, velocidad y comportamiento del juego.</li>
</ul>`;
  return detalle_Vizper;
}

function listDetailSukarne() {
  const detalle_Sukarne = `  <ul>  
<li>Año: 2018</li>                    
<li>Softwares Adobe: Illustrator & After Effect.</li>
<li>Vectorizado y modificación de elementos.</li>
<li>Modificación de logo para ajustar los elementos a SANTA MARTHA.</li>
<li>Animaciones y transiciones de los iconos y títulos.</li>
<li>Composición de video promocional de carne para SuKarne Santa Martha.</li>
<li>Renderizado de los materiales audio visuales.</li>
    </ul>`;
  return detalle_Sukarne;
}

function listDetailDemoServiceDesk() {
  const detalle_HelpDesk = `  <ul>
<li>Año: 2018</li>                        
<li>Lenguaje:HTML,CSS,JS,PHP.</li>
<li>DB:MySQL.</li>
<li>Plantilla:AdminLT3</li>
<li>Modelo:MVC,POO</li>
<li>Funciones de sistema:Alta y mantenimiento de ticket, control de usuarios, logeo, información general de ticket</li>
<li>Funciones de sistema:Alta y mantenimiento de ticket, control de usuarios, logeo, información general de ticket</li>


 </ul>`;
  return detalle_HelpDesk;
}

function skillHTML() {
  const detalle_HTML = `
  <iframe src="" frameborder="0"></iframe>
  `
}

function validateForm(form) {
  if (
    validacion[0].value != "" &&
    validacion[1].value != "" &&
    validacion[2].value != "" &&
    validacion[3].value != ""
  ) {
    setContact(form);
  } else {
    for (i = 0; i < validacion.length; i++) {
      if (validacion[i].value == "") {
        validacion[i].classList.add("is-invalid");
      } else {
        validacion[i].classList.remove("is-invalid");
      }
    }
  }
}

function validateInput() {
  validacion.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value == "") {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });
  });
}
function init() {
  validateInput();
}

btn_detalles_vizper.addEventListener("click", () => {
  contenedor_Detalles.innerHTML = listDetailVizper();
});
btn_detalles_sukarne.addEventListener("click", () => {
  contenedor_Detalles.innerHTML = listDetailSukarne();
});
btn_detalles_demo_helpdesk.addEventListener("click", () => {
  contenedor_Detalles.innerHTML = listDetailDemoServiceDesk();
});
let validacion = document.querySelectorAll(".validar");
btn_enviar.addEventListener("click", () => {
  const formContact = document.getElementById("form-contacto");
  validateForm(formContact);
});

btn_skill[0].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_html.html')
})
btn_skill[1].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_css.html')
})
btn_skill[2].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_js.html')
})
btn_skill[3].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_boostrap.html')
})
btn_skill[4].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_php.html')
})
btn_skill[5].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_sql.html')
})
btn_skill[6].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_git.html')
})
btn_skill[7].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_illustrator.html')
})
btn_skill[8].addEventListener('click', () => {
  iframe_body.setAttribute('src','view/skill_photoshop.html')
})

init();
