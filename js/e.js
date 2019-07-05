/*funciones separada*/

function filtrar_tipo() {
  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var tipo = $('#selectTipo option:selected').text();
      console.log(tipo);
      var mostrar = "";
      for (var i = 0; i < datos.length; i++) {
        if (tipo == datos[i].Tipo) {
          console.log(datos[i].Tipo);
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

function filtrar_ciudad() {
  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var ciudad = $('#selectCiudad option:selected').text();
      console.log(ciudad);
      var mostrar = "";
      for (var i = 0; i < datos.length; i++) {
        if (ciudad == datos[i].Ciudad) {
          console.log(datos[i].Ciudad);
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

function filtrar_precio() {

  $.ajax({
    url: "./data-1.json",
    success: function(datos) {
      var precio_rango = $('#rangoPrecio').val();
      var min = precio_rango.substr(0, 4);
      var max = precio_rango.substr(5, 7);

      var mostrar = "";
      for (var i = 0; i < datos.length; i++) {
        var precio =datos[i].Precio.replace(',','');
        if (min <= precio.substring(1) && max >= precio.substring(1) ) {
        /*  console.log('dentro del if');*/
          console.log(precio.substring(1));
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