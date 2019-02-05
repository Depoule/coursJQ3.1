$(function(){ // you can wrap it here with in document ready block
   var count = 0;
   $('#button').click(function(){
    count++; //ajoute 1 au compteur
      $('#text').val(count);//fonction val permet de définir la valour d'un input (pas forcément que des nombres)
   });
});
