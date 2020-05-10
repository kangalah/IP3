
$(document).ready(function() {

  $(".design").click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });

//   $("button").click(function (event) {
//   var client = document.getElementById('nameDetail').value;
//   alert(' Dear ' + ' esteemed ' + client + ' we have received your message successfully. ' + ' Feel free to reach out to us anytime');
//   event.preventDefault();

// });
$('.submit').click(function () {
  var Name = $('#mce-FNAME').val();
  var Email = $('#mce-EMAIL').val();
  var Message = $('#mce-MESSAGE');
  var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
  if (Name == '' || Email == '' || Message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
  }
});
$(".Hover").hover(function(){
  $(this).animate({opacity:'1'});
},
function(){
  $(this).animate({opacity:'0'});
})
  // $(".portfolio-images").hover(function () {
  //   $(this).children(".Hover").fadeToggle(1000, "linear");
  // });
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
});