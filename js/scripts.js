   $('.design').click(function () {
    $(this).children('.hide').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });


    $(document).ready(function(){
$('.submit').click(function () {
  var name = $('#b_name').val();
  var email = $('#b_email').val();
  var message = $('#b_comment');
  // var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
  if (name == '' || email == '' || message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us.');
  }
  event.preventDefault ();
});
});
