// js file

// var IMAGES = document.querySelector('body');

// IMAGES.addEventListener('click', function(e) {
//     console.log(e.target.id);
//     if (e.target.id === 'todd') e.target.classList.add('hide');
// });

var DELEGATE = document.querySelector("body");

DELEGATE.addEventListener("click", function(e) {
  console.log(e.target);
  if (e.target.id === "full-service")
    DELEGATE.classList.add("show-full-service");
});

var slideIndex = 0;
// carousel(".top-carousel li", 2000);
carousel(".bottom-carousel li", 2500);

function carousel(myClass, interval) {
  var i;
  var x = document.querySelectorAll(myClass);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(function() {
    carousel(myClass, interval);
  }, interval); 
}
