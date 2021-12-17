var increment = 0;
$('.chat-input input').keyup(function(e) {
    if ($(this).val() == '')
        $(this).removeAttr('good');
    else
        $(this).attr('good', '');
});
$(function () {
var socket = io();
$('form').submit(function(){
  socket.emit('chat message', $('#message').val());
  $('#message').val('');
  return false;
});

socket.on('chat message', function(msg){
  
  var $wrapper = document.querySelector('.chat-window'),
 
    // Cria uma string de texto
    HTMLNovo = 
    '<article class="msg-container msg-self" id="msg-'+increment+'">'+
        '<div class="msg-box">'+
            '<div class="flr">'+
                '<div class="messages">'+
                    '<p class="msg" id="msg-1">'+
                    msg+
                    '</p>'+
                '</div>'+
                '<span class="timestamp"><span class="username">Name</span>&bull;<span class="posttime">Now</span></span>'+
            '</div>'+
            '<img class="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />'+
        '</div>'+
    '</article>';
 
    
    // Insere o fragmento antes do conteúdo atual do elemento
    $wrapper.insertAdjacentHTML("beforeend",HTMLNovo);
});
});