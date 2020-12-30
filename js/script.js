
$(document).ready(function(){ // ESTO PERMITE QUE SE EJECUTE ESL JS AL MOMENENTO DE INGRESAR 
                                // A LA PAGINA 
                             
    

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE =========RECIEN SE LE AGREGA LA CLASE ct_item-active
    $('.categoria_lista .categoria_item[categoria="todo"]').addClass('ct_item-active');

    
    
    //FILTRANDO LOS PROUDUCTOS -PLANTAS
    $('.categoria_item').click(function(){
    
    //AQUI CREO UNA VARIABLE catProducto  QUE ME PERMITE UTLIZAR EL ATRIBUTO CATEGORIA 
    //DE  DE LAS DIFERENTE PAGINAS  HTML DE PLANTAS DE EXTERIO, INTERIOR, FRUTALES Y AROMATICAS 
    var catProducto=$(this).attr('categoria');
        //console.log(catProducto);

    //AGREGANDO LA CLASE ACTIVE AL ENNLACE SELECCIONADO
    $('.categoria_item').removeClass('ct_item-active')
    // CON ESA CLASE ACTIVO  ct_item-active  QUE LE ESTE DANDO CLICK
    $(this).addClass('ct_item-active')




    // AQUI UTILIZAMOS LA ESCALA PARA QUE LOS PRODUCTOS TENGAN UN EFECTO AL OCULTARSE
    $('.productos-item').css('transform','scale(0)');

    
    // CREO UNA FUNCION PARA ESCONDER LOS PRODUCTOS EN 400 MILISEGUNDO Y NO AL INSTANTE
    function hideProducto(){
         $('.productos-item').hide();
    }setTimeout(hideProducto,400);


    //============MOSTRANDO PRODUCTOS ===================================================

   function showProducto(){
    $('.productos-item[categoria="'+catProducto+'"]').show();
    $('.productos-item[categoria="'+catProducto+'"]').css('transform','scale(1)')
   }setTimeout(showProducto,400);
  
    });



    //===========MOSTRAND TODOS LOS PRODUCTOS===========================================
    $('.categoria_item[categoria="todo"]').click(function(){
       
        function showtodo(){
        $('.productos-item').show();
        $('.productos-item').css('transform','scale(1)');
       }setTimeout(showtodo,400);
       
    });

})