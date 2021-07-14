$("#consent").change(function() {
  if(!$('#email').val() == '' && !$('#lastName').val() == '' && !$('#firstName').val() == '' && $('#consent').is(':checked'))  {

    $('#sendMessage').addClass('activeBackground')

  }

})
