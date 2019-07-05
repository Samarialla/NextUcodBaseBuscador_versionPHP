/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function() {
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback, timeout));
  });
};

/*version nueva*/
function mostrarbusquedas() {
  $.ajax({
    url: "./data-1.json",
    async: true,
    success: function(datos) {
      var mostrar = "";
      for (var i = 0; i < datos.length; i++) {
        mostrar += "<div class='row casa'>" +
          "<img class='col 4' src='img/home.jpg' />" +
          "<div class='col 1'>" +
          "<p class='Direccion '>Direccion : " + datos[i].Direccion + "</p>" +
          "<p class='Ciudad'>Ciudad :" + datos[i].Ciudad + "</p>" +
          "<p class='Telefono'>Telefono : " + datos[i].Telefono + "</p>" +
          "<p class='Codigo_Postal'>Codigo Postal : " + datos[i].Codigo_Postal + "</p>" +
          "<p class='Tipo'>Tipo : " + datos[i].Tipo + "</p>" +
          "<p class='Precio'>Precio : " + datos[i].Precio + "</p>" +
          "</div>" +
          "</div>"
      }
      $("#uno").html(mostrar);
      $('select').material_select();
    }
  });
}

$(document).ready(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > $(document).height() - $(window).height()) {
      mostrarbusquedas();
      $('select').material_select();
    }

  }).scroll();
  $("#mostrarTodos").click(function() {
    mostrarbusquedas();

    $('select').material_select();
  });
});

/**cargar combop*/
function cargardatos() {
  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var array = [];
      for (var i = 0; i < datos.length; i++) {
        if (array.includes(datos[i].Ciudad) == false) {
          $('#selectCiudad').append('<option value="' + array.push(datos[i].Ciudad) + 'selected="selected">' + datos[i].Ciudad + '</option>');
          /*console.log(datos[i].Ciudad);*/
        }
      }

      $('select').material_select();
    }
  });
}

/*cargar tipo*/
function cargartipo() {
  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var array = [];
      for (var i = 0; i < datos.length; i++) {
        if (array.includes(datos[i].Tipo) == false) {
          $('#selectTipo').append('<option value="' + array.push(datos[i].Tipo) + 'selected="selected">' + datos[i].Tipo + '</option>');
          /*  console.log(datos[i].Tipo);*/
        }
      }

      $('select').material_select();
    }
  });
}

function inicializarSlider() {
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 30746,
    to: 80000,
    prefix: "$"

  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
/*function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}







/*
*/

function filtro() {
  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var tipo = $('#selectTipo option:selected').text();
      var ciudad = $('#selectCiudad option:selected').text();
      var precio_rango = $('#rangoPrecio').val();
      var min = precio_rango.substr(0, 4);
      var max = precio_rango.substr(5, 7);
      var mostrar = "";
      for (var i = 0; i < datos.length; i++) {
        var precio = datos[i].Precio.replace(',', '');
        if ((tipo == datos[i].Tipo) && (ciudad == datos[i].Ciudad) && (min <= precio.substring(1) && max >= precio.substring(1))) {
          console.log('1');
          mostrar += "<div class='row casa'>" +
            "<img class='col 4' src='img/home.jpg' />" +
            "<div class='col 1'>" +
            "<p class='Direccion '>Direccion : " + datos[i].Direccion + "</p>" +
            "<p class='Ciudad'>Ciudad :" + datos[i].Ciudad + "</p>" +
            "<p class='Telefono'>Telefono : " + datos[i].Telefono + "</p>" +
            "<p class='Codigo_Postal'>Codigo Postal : " + datos[i].Codigo_Postal + "</p>" +
            "<p class='Tipo'>Tipo : " + datos[i].Tipo + "</p>" +
            "<p class='Precio'>Precio : " + datos[i].Precio + "</p>" +
            "</div>" +
            "</div>"
        }

        if (tipo == datos[i].Tipo && (min <= precio.substring(1) && max >= precio.substring(1))) {
          console.log('2');
          mostrar += "<div class='row casa'>" +
            "<img class='col 4' src='img/home.jpg' />" +
            "<div class='col 1'>" +
            "<p class='Direccion '>Direccion : " + datos[i].Direccion + "</p>" +
            "<p class='Ciudad'>Ciudad :" + datos[i].Ciudad + "</p>" +
            "<p class='Telefono'>Telefono : " + datos[i].Telefono + "</p>" +
            "<p class='Codigo_Postal'>Codigo Postal : " + datos[i].Codigo_Postal + "</p>" +
            "<p class='Tipo'>Tipo : " + datos[i].Tipo + "</p>" +
            "<p class='Precio'>Precio : " + datos[i].Precio + "</p>" +
            "</div>" +
            "</div>"
        }
        if (ciudad == datos[i].Ciudad && min <= precio.substring(1) && max >= precio.substring(1)) {
          console.log('3');
          mostrar += "<div class='row casa'>" +
            "<img class='col 4' src='img/home.jpg' />" +
            "<div class='col 1'>" +
            "<p class='Direccion '>Direccion : " + datos[i].Direccion + "</p>" +
            "<p class='Ciudad'>Ciudad :" + datos[i].Ciudad + "</p>" +
            "<p class='Telefono'>Telefono : " + datos[i].Telefono + "</p>" +
            "<p class='Codigo_Postal'>Codigo Postal : " + datos[i].Codigo_Postal + "</p>" +
            "<p class='Tipo'>Tipo : " + datos[i].Tipo + "</p>" +
            "<p class='Precio'>Precio : " + datos[i].Precio + "</p>" +
            "</div>" +
            "</div>"
        }
        if (min <= precio.substring(1) && max >= precio.substring(1)) {
          console.log('3');
          mostrar += "<div class='row casa'>" +
            "<img class='col 4' src='img/home.jpg' />" +
            "<div class='col 1'>" +
            "<p class='Direccion '>Direccion : " + datos[i].Direccion + "</p>" +
            "<p class='Ciudad'>Ciudad :" + datos[i].Ciudad + "</p>" +
            "<p class='Telefono'>Telefono : " + datos[i].Telefono + "</p>" +
            "<p class='Codigo_Postal'>Codigo Postal : " + datos[i].Codigo_Postal + "</p>" +
            "<p class='Tipo'>Tipo : " + datos[i].Tipo + "</p>" +
            "<p class='Precio'>Precio : " + datos[i].Precio + "</p>" +
            "</div>" +
            "</div>"
        }

      }
      $("#uno").html(mostrar);
      $('select').material_select();
    }
  });
}


$("#submitButton").click(function() {
  filtro();
});

/*playVideoOnScroll();*/
inicializarSlider();
cargardatos();
cargartipo();
