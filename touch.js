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
var bottomCarousel = new carouselObj(".bottom-carousel li", 6000);
bottomCarousel.carousel();

var topCarousel = new carouselObj(".top-carousel li", 6500);
topCarousel.carousel();

var whatIs1897 = new carouselObj(".what-is-1897.slideshow li", 1500);
whatIs1897.carousel();

// click events
var DELEGATE = document.querySelector("body");

DELEGATE.addEventListener("click", function(e) {
  if (e.target.id) {
    // clear classes before adding new ones
    DELEGATE.className = "";
    var showClass = "show-" + e.target.id;

    DELEGATE.classList.add(showClass);

    var showTimeOut = setTimeout(function() {
      DELEGATE.classList.remove(showClass);
    }, 15000);
  }
});
