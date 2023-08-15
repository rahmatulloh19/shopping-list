// exporting elements from DOM
const elForm = document.querySelector(".js-form");
const elOrder = document.querySelector(".js-input_order");
const elCount = document.querySelector(".js-input_count");
const elRecordBtn = document.querySelector(".js-btn_record");
const elResetBtn = document.querySelector(".js-btn_reset");
const elList = document.querySelector(".js-list");
const elOut = document.querySelector(".js-outging_text");

// by default orders
let orders = [
  {
    user_order: "Buy Benanas",
    user_count: 14
  },
  {
    user_order: "Buy Apple",
    user_count: 11
  },
]

// preparing render function
function renderOrders(array) {
  // before working the function we cleaning list's textContent for don't redraw
  elList.innerHTML = "";
  
  array.forEach(function(item) {
    // making elements, adding class to thier classlist and giving textContent
    const liElement = document.createElement("li");
    liElement.classList.add("item");
    liElement.textContent = item.user_order
    
    const countElement = document.createElement("span");
    countElement.classList.add("item-count");
    countElement.textContent = item.user_count;
    
    // chaining element
    liElement.prepend(countElement);
    elList.appendChild(liElement);
  });
}

renderOrders(orders);


const record = new webkitSpeechRecognition();

elRecordBtn.addEventListener("click", function() {
  record.start();
  
  record.onresult = function(evt) {
    // getting recorded text
    const recordedText = evt.results[0][0].transcript;
    // converting text to array for iterate it
    const convertRecordedText = recordedText.split(" ");
    
    // getting number and texts
    let num;
    let text = [];
    convertRecordedText.forEach(function(item) {
      // checking items
      if(Number(item)) {
        num = item;
      } else {
        text.push(item);
      }
    })
    // collapse array
    let convertString = text.join(" ");
    
    // change firstcharacter from anyone to upperCase 
    convertString = convertString.replace(convertString.charAt(0), convertString.charAt(0).toUpperCase());
    if(num !== "" && num !== undefined && convertString !== "") {
      elCount.value = num;
      elOrder.value = convertString;
      elOut.textContent = "Succesfully added✅"
    } else {
      elOut.textContent = "Please say count with order"
    }
  }
})

// function for reset btn
elResetBtn.addEventListener("click", function() {
  elOrder.value = "";
  elCount.value = "";
  elOut.textContent = "";
})

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  let elOrderValue = elOrder.value.trim();
  let elCountValue = elCount.value;
  
  // checking values for don't push empty value
  if(elOrderValue !== "" && elCountValue !== "") {
    const newOrder = {
      user_order: elOrderValue,
      user_count: elCountValue
    }
    
    orders.push(newOrder);
  }

  renderOrders(orders);
  
  elOrder.value = "";
  elCount.value = "";
  elOut.textContent = "";
})