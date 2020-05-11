   $('.design').click(function () {
    $(this).children('.hide').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });


//     $(document).ready(function(){
// $('.submit').click(function () {
//   var name = $('input#b_name').val();
//   var email = $('input#b_email').val();
//   var message = $('textarea#b_comment').val();
  
//   if ('input#b_name' == '' || 'input#b_email' == '' || 'input#b_comment' == '') {
//       alert('Please make sure you have filled in the form correctly!');
//   } else {
//       alert(' Hi ' + name + ' We have received your message. Thank you for reaching out to us.');
//   }
//   event.preventDefault ();
// });
// });
$(document).ready(function(){
  $("#form").submit(function(event){
    // event.preventDefault();
    var name = $("input#b_name").val();
    var email = $("input#b_email").val();
    var message = $("textarea#b_comment").val();
    if ($("input#b_name").val() && $("input#b_email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
