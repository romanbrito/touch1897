// carousel object
function carouselObj(myClass, interval) {
    this.myClass = myClass;
    this.interval = interval;
  
    this.slideIndex = 0;
  }

carouselObj.prototype.carousel = function() {
  var self = this;

  function slideShow() {
    var i;
    var x = document.querySelectorAll(self.myClass);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    self.slideIndex++;
    if (self.slideIndex > x.length) {
      self.slideIndex = 1;
    }
    x[self.slideIndex - 1].style.display = "block";

    setTimeout(function() {
      slideShow();
    }, self.interval);
  }

  slideShow();
};

// run carousels
var bottomCarousel = new carouselObj(".bottom-carousel li", 2500);
bottomCarousel.carousel();

var topCarousel = new carouselObj(".top-carousel li", 2000);
topCarousel.carousel();

// var whatIs1897 = new carouselObj(".what-is-1897 li", 1000);
// whatIs1897.carousel();

// click events
var DELEGATE = document.querySelector("body");

DELEGATE.addEventListener("click", function(e) {
    var showClass = 'show-' + e.target.id
    // main-buttons-second
  if (e.target.id === "what-is-1897") DELEGATE.classList.add(showClass);
  if (e.target.id === "qsr") DELEGATE.classList.add("show-full-service");
  if (e.target.id === "gng") DELEGATE.classList.add("show-full-service");

  // main buttons-first
  if (e.target.id === "full-service") DELEGATE.classList.add(showClass);
  if (e.target.id === "qsr") DELEGATE.classList.add("show-full-service");
  if (e.target.id === "gng") DELEGATE.classList.add("show-full-service");

  var fullServiceTimeOut = setTimeout(function() {
    DELEGATE.classList.remove(showClass);
  }, 5000);
});
