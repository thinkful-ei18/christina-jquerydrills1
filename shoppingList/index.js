console.log('working');

//append new item to list of items
//check and uncheck by applying new class ".shopping-item__checked"
//remove items from list using .remove()
// helpful notes: submit() preventDefault() toggleClass() closest()
// use THIS and event delegation


$('#js-shopping-list-form button').on('click', (event) => {
  event.preventDefault();

  let item = $('.js-shopping-list-entry').val();
  addItem(item);
  console.log(item + 'at end of list');

  
})

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
  `
  )
  console.log('append to end of list' + item);
}