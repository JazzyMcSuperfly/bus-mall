//Global variables
var allProducts = [];
var totalClicks = 0;
var maxClicks = 3;
var appField = document.getElementById('app-field');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//Chart Stuff
var votes = [];
var resultsChart;
var chartDrawn = false;

function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    productNames[i] = allProducts[i].itemName;
    votes[i] = allProducts[i].clicks;
  }
}

var resultsData = {
  labels : productNames,
  datasets : [
    {
      fillColor : '#ff6622',
      strokeColor : '#aa991c',
      data : votes
    }
  ]
};

function drawChart() {
  updateChartArrays();
  var ctx = document.getElementById('results').getContext('2d');
  resultsChart = new Chart(ctx,{
    type: 'bar',
    data: resultsData,
    options: {
      responsive: false
    }
  });
  chartDrawn = true;
}

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

  var centerIndex = randNum(0, allProducts.length);
  while (centerIndex === leftIndex) {
    centerIndex = randNum(0, allProducts.length);
  }
  center.src = allProducts[centerIndex].path;
  center.alt = allProducts[centerIndex].itemName;
  allProducts[centerIndex].views += 1;

  var rightIndex = randNum(0, allProducts.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum(0, allProducts.length);
  }
  right.src = allProducts[rightIndex].path;
  right.alt = allProducts[rightIndex].itemName;
  allProducts[rightIndex].views += 1;
}

function handleClick(event) {
  totalClicks += 1;
  if (event.target.id === 'app-field') {
    return alert('Hey dummy, click directly on one of the three items shown!');
  }

  if (totalClicks >= maxClicks) {
    return alert('Thanks for participating! Please click the "Get Results" button on the page to view a breakdown of your choices.');
  }

  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].itemName) {
      allProducts[i].clicks += 1;
    }
  }
  displayProducts();
}

appField.addEventListener('click', handleClick);
document.getElementById('get-results').addEventListener('click', function(){
  drawChart();
});

displayProducts();
