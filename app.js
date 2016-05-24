//Global variables
var allProducts = [];
var imagePool = [];
var maxClicks = 25;
var appField = document.getElementById('app-field');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//Product constructor
function Product(itemName) {
  this.path = 'images/' + itemName + '.jpg';
  this.itemName = itemName;
  this.clicks = 0;
  this.views = 0;
}

//Construct Products and push to all products array
for (var i = 0; i < productNames.length; i++) {
  allProducts.push(new Product(productNames[i]));
}

//Get random number
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Set 'SRC' and 'ALT' of the corresponding image tag
function displayProducts() {
  var leftIndex = randNum(0, allProducts.length);
  left.src = allProducts[leftIndex].path;
  left.alt = allProducts[leftIndex].itemName;
  allProducts[leftIndex].views += 1;
  console.log(allProducts[leftIndex].itemName + ' has been shown ' + allProducts[leftIndex].views + ' times');

  var centerIndex = randNum(0, allProducts.length);
  while (centerIndex === leftIndex) {
    centerIndex = randNum(0, allProducts.length);
  }
  center.src = allProducts[centerIndex].path;
  center.alt = allProducts[centerIndex].itemName;
  allProducts[centerIndex].views += 1;
  console.log(allProducts[centerIndex].itemName + ' has been shown ' + allProducts[centerIndex].views + ' times');

  var rightIndex = randNum(0, allProducts.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum(0, allProducts.length);
  }
  right.src = allProducts[rightIndex].path;
  right.alt = allProducts[rightIndex].itemName;
  allProducts[rightIndex].views += 1;
  console.log(allProducts[rightIndex].itemName + ' has been shown ' + allProducts[rightIndex].views + ' times');
}

function handleClick(event) {
  if (event.target.id === 'app-field') {
    return alert('Hey dummy, click directly on one of the three items shown!');
  }

  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].itemName) {
      allProducts[i].clicks += 1;
      console.log(allProducts[i].itemName + ' has ' + allProducts[i].clicks + ' clicks.');
    }
  }
  displayProducts();
}

appField.addEventListener('click', handleClick);

displayProducts();
