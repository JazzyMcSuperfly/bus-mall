//Global variables
var products = [];
var imagePool = [];
var maxClicks = 25;
var clickZone = document.getElementById('app-field');
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
// var img = document.createElement('img');

//Product constructor
function Product(path, itemName) {
  this.path = path;
  this.itemName = itemName;
  this.clicks = 0;
  this.views = 0;

  products.push(this);
}

//Populate array with existing products
var bag = new Product('images/bag.jpg', 'bag');
var banana = new Product('images/banana.jpg', 'banana');
var bathroom = new Product('images/bathroom.jpg', 'bathroom');
var boots = new Product('images/boots.jpg', 'boots');
var breakfast = new Product('images/breakfast.jpg', 'breakfast');
var bubblegum = new Product('images/bubblegum.jpg', 'bubblegum');
var chair = new Product('images/chair.jpg', 'chair');
var cthulu = new Product('images/cthulhu.jpg', 'cthulu');
var dogDuck = new Product('images/dog-duck.jpg', 'dog-duck');
var dragon = new Product('images/dragon.jpg', 'dragon');
var pen = new Product('images/pen.jpg', 'pen');
var petSweep = new Product('images/pet-sweep.jpg', 'pet-sweep');
var scissors = new Product('images/scissors.jpg', 'scissors');
var shark = new Product('images/shark.jpg', 'shark');
var sweep = new Product('images/sweep.jpg', 'sweep');
var tauntaun = new Product('images/tauntaun.jpg', 'tauntaun');
var unicorn = new Product('images/unicorn.jpg', 'unicorn');
var usp = new Product('images/usb.jpg', 'usb');
var waterCan = new Product('images/water-can.jpg', 'water-can');
var wineGlass = new Product('images/wine-glass.jpg', 'wine-glass');

//Get random image function
var getRandomImg = function(min, max) {
  imagePool = [];
  var useRandom1 = Math.floor(Math.random() * (max - min)) + min;
  var useRandom2 = Math.floor(Math.random() * (max - min)) + min;
  var useRandom3 = Math.floor(Math.random() * (max - min)) + min;
  if (useRandom1 === useRandom2 || useRandom2 === useRandom3 || useRandom1 === useRandom3) {
    getRandomImg(0, products.length);
  } else {
    imagePool.push(products[useRandom1], products[useRandom2], products[useRandom3]);
  }
};

var displayThree = function() {
  left.src = imagePool[0].path;
  right.src = imagePool[1].path;
  center.src = imagePool[2].path;
  for (var i = 0; i < imagePool.length; i++) {
    imagePool[i].views++;
  }
};

function clickCounter(event) {
  console.log(this);
};

function handleClick(event) {
  getRandomImg(0, products.length);
  displayThree();
}

clickZone.addEventListener('click', handleClick);
left.addEventListener('click', clickCounter);
center.addEventListener('click', clickCounter);
right.addEventListener('click', clickCounter);
