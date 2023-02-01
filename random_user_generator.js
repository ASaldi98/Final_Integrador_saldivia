//document.getElementById('boton_generar').onclick = function(){
  jQuery(function($){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        //console.log(data);

        let datos_lista = data.results;
        console.log(datos_lista);  

        let output = " "

        //clases Bootstrap (para no repetir)
        const item = "list-group-item"
        const divisor ="container-fluid d-md-flex py-4 mx-auto border-bottom align-items-center"

        datos_lista.forEach(function(lista){
          output +=
            `
             <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">

                      <div class="${divisor}">
                        <img class="img-fluid rounded" src="${lista.picture.large}">
                        <h1 class="display-3"><strong>${lista.name.last}</strong></h1>
                      </div>

                      <div class="${divisor}">
                        <li class="${item}"><strong><u>Nombre completo</u></strong>: ${lista.name.last}, ${lista.name.first}</li>
                        <li class="${item}"><strong><u>Nacimiento (AAAA/MM/DD)</u></strong>: ${lista.dob.date.substring(0,10)}</li>
                        <li class="${item}"><strong><u>Edad</u></strong>: ${lista.dob.age}</li>
                        <li class="${item}"><strong><u>Género</u></strong>: ${lista.gender}</li>
                      </div>

                      <div class="${divisor}">
                        <li class="${item}"><strong><u>Teléfono</u></strong>: ${lista.cell}</li>
                        <li class="${item}"><strong><u>Email</u></strong>: ${lista.email}</li>
                      </div>
                      
                      <li class="${item}"><u>País</u>: <strong>${lista.location.country}</strong></li>
                      <li class="${item}"><u>Ciudad</u>: <strong>${lista.location.city}</strong></li>
                      <li class="${item}"><u>Código postal</u>: ${lista.location.postcode}</li>
                    </ul>
                </div>
              </div>
            `
          })
        //datos_lista.results.name.first
        ;

        document.getElementById('texto_usuario').innerHTML = output;
      }
    });
  })
//}