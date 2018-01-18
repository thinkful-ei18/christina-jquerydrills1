
$('.thumbnail').on('click', (e) => {
  const heroImage = $(event.currentTarget).html();
  $('.hero').html(heroImage);
})