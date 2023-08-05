// Elements transferred from index.html

let elForm = document.querySelector(".js-form");
let elOrder = document.querySelector(".js-input_order");
let elCount = document.querySelector(".js-input_count");
let elList = document.querySelector(".js-list");

// opened by default orders
let orders = [
  {
    user_order: "Buy Benanas",
    user_count: 14
  },
  {
    user_order: "Buy Apple",
    user_count: 11
  },
  {
    user_order: "Buy Favorite Book",
    user_count: 9
  },
  {
    user_order: "Pay Bill",
    user_count: 2
  },
  {
    user_order: "Damdaran Milk",
    user_count: 10
  },
]

// Maked new function for arrays
function renderItems(array) {

  elList.innerHTML = ""

  array.forEach(function(item) {
    // Created elements and added classes
    let liElement = document.createElement("li");
    liElement.classList.add("item");

    let spanElement = document.createElement("span");
    spanElement.classList.add("item-count");

    // TextContent gave to created elements
    liElement.textContent = item.user_order;
    spanElement.textContent = item.user_count;
    
    // Connected the elements together
    liElement.prepend(spanElement);
    elList.append(liElement);
  })
}

renderItems(orders);

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let elOrderValue = elOrder.value.trim();
  let elCountValue = elCount.value;

  let new_order = {
    user_order: elOrderValue,
    user_count: elCountValue
  }

  orders.push(new_order);
  renderItems(orders);
})