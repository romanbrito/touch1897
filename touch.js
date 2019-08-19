var DELEGATE = document.querySelector("body");

DELEGATE.addEventListener("click", function(e) {
  if (e.target.id === "full-service")
    DELEGATE.classList.add("show-full-service");
  var fullServiceTimeOut = setTimeout(function() {
    DELEGATE.classList.remove("show-full-service");
  }, 5000);
});

// var slideIndex = 0;
// carousel(".top-carousel li", 2000);
// carousel(".bottom-carousel li", 2500);

// function carousel(myClass, interval) {
//   var i;
//   var x = document.querySelectorAll(myClass);
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   x[slideIndex - 1].style.display = "block";
//   setTimeout(function() {
//     carousel(myClass, interval);
//   }, interval);
// }

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

var bottomCarousel = new carouselObj(".bottom-carousel li", 2500);
bottomCarousel.carousel();

var topCarousel = new carouselObj(".top-carousel li", 2000);
topCarousel.carousel();