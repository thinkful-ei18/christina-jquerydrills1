//append new item to list of items -done
//check and uncheck by applying new class ".shopping-item__checked"
//remove items from list using .remove()
// helpful notes: submit() preventDefault() toggleClass() closest()
// use THIS and event delegation

//add item
$('#js-shopping-list-form button').on('click', (event) => {
  event.preventDefault();
  const item = $('.js-shopping-list-entry').val();
  addItem(item);
})

//check item
$('.shopping-list').on("click", '.shopping-item-toggle', function (event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

//remove item
$('.shopping-list').on("click", '.shopping-item-delete', function (event) {
	$(this).closest('li').remove();
});
  

function addItem (item) {
  $('.shopping-list').append(
    `
    <li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  ` )
}