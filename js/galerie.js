$(document).ready(function() {
  $('.body').css('display', 'none');
  $('.body').fadeIn(2000);

  $('a.transition').click(function(event) {
    event.preventDefault();
    linkLocation = this.href;
    $('body').fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }

  function showHide(d) {
    var onediv = document.getElementById(d);
    var divs = ['block', 'about-us', 'services', 'women', 'men', 'mini', 'test', 'contact', 'blog'];
    for (var i = 0; i < divs.length; i++) {
      if (onediv != document.getElementById(divs[i])) {
        document.getElementById(divs[i]).style.display = 'none';
      }
    }
    onediv.style.display = 'block';
  }

  $('#name, #email, #message, #how, #human').keyup(function() {
    if ($('#name').val().length != 0) {
      $('#name').removeClass('error');
      $('#nameError').hide();
    }

    if ($('#email').val().length != 0) {
      $('#email').removeClass('error');
      $('#emailError').hide();
    }

    if ($('#message').val().length != 0) {
      $('#message').removeClass('error');
      $('#messageError').hide();
    }

    if ($('#how').val().length != 0) {
      $('#how').removeClass('error');
      $('#howError').hide();
    }

    if ($('#human').val().length != 0) {
      $('#human').removeClass('error');
      $('#humanError').hide();
    }
  });

  $("#installationForm").submit(function(event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var how = $('#how').val();
    var human = $('#human').val();

    if (!name) {
      $("#nameError").text("Enter a name").show();
      $('#name').addClass('error');
      $('#nameError').css('color', 'red');
    }

    if (!email) {
      $('#emailError').text("Enter a valid email address").show();
      $('#email').addClass('error');
      $('#emailError').css('color', 'red');
    }

    if (!message) {
      $('#messageError').text("Enter a message").show();
      $('#message').addClass('error');
      $('#messageError').css('color', 'red');
    }

    if (!how) {
      $('#howError').text("Tell us how you heard about MyStyleExpert").show();
      $('#how').addClass('error');
      $('#howError').css('color', 'red');
    }

    if (!human || human != 5) {
      $('#humanError').text("Enter correct value").show();
      $('#human').addClass('error');
      $('#humanError').css('color', 'red');
    }

    if (name && email && message && how && human === "5") {
      return;
    }
    event.preventDefault();
  });

  $('.carousel').carousel({
    "pause": "false"
  });

});
