
  $('.design').click(function () {
    $(this).children('.hide').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });

  // portfolio
  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });

//   $("button").click(function (event) {
//   var client = document.getElementById('nameDetail').value;
//   alert(' Dear ' + ' esteemed ' + client + ' we have received your message successfully. ' + ' Feel free to reach out to us anytime');
//   event.preventDefault();

// });
// $(document).ready(function(){
//   $(".design").click(function() {
//   $(".hide").toggle(500);
//   $(".show").toggle(500);
//   });
//   $(".design").click(function() {
//   $(".show").toggle(500);
//   $(".hide").toggle(500);
//   });
//   $(".design").click(function() {
//   $(".show").toggle(500);
//   $(".hide").toggle(500);
//   });
//   });
  // }); 
// $('.submit').click(function () {
//   var Name = $('#mce-FNAME').val();
//   var Email = $('#mce-EMAIL').val();
//   var Message = $('#mce-MESSAGE');
//   var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
//   if (Name == '' || Email == '' || Message == '') {
//       alert('Please make sure you have filled in the form correctly!');
//   } else {
//       alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
//   }
// });
// $(".Hover").hover(function(){
//   $(this).animate({opacity:'1'});
// },
// function(){
//   $(this).animate({opacity:'0'});
// })
  // $(".portfolio-images").hover(function () {
  //    $(this).children(".Hover").fadeToggle(1000);
  // });
  // $("button").on('click', function () {
  //   $('form').each(function () {
  //     this.reset();
  //   });
//   });
// });