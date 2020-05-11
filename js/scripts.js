   $('.design').click(function () {
    $(this).children('.hide').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });

  
  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(500,);
  });


$('.submit').click(function () {
  var name = $('#mce-FNAME').val();
  var email = $('#mce-EMAIL').val();
  var message = $('#mce-MESSAGE');
  var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
  if (name == '' || email == '' || message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us.');
  }
  event.preventDefault ();
});
