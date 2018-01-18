


$('input[type = submit').on('click', (event) => {
  event.preventDefault();

  let numInput = $('#number-choice').val();
  console.log(numInput);

  
if (numInput % 3 === 0 && numInput % 5 === 0) {
    $('.js-results').addClass('fizzbuzz');
    $('.js-results').append('<span>' + numInput + '</span>');
  } 
  else if (numInput % 5 === 0) {
    $('.js-results').addClass('buzz');
    $('.js-results').append('<span>' + numInput + '</span>');
  } 
  else if (numInput % 3 === 0) {
    $('.js-results').addClass('fizz');
    $('.js-results').append('<span>' + numInput + '</span>');
  } 
  else {
    $('.js-results').append('<span>This is not a fizzbuzz number!</span>');
  }

  
  
});