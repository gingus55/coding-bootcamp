var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const handleSubmit = function () {
  let array = JSON.parse(localStorage.getItem("items")) || [];

  const item = $("#shopping-input");
  array.push(item);

  localStorage.setItem(JSON.stringify(array));
};
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit", handleSubmit);