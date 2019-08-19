// js file

// var IMAGES = document.querySelector('body');

// IMAGES.addEventListener('click', function(e) {
//     console.log(e.target.id);
//     if (e.target.id === 'todd') e.target.classList.add('hide');
// });

var DELEGATE = document.querySelector('body');

DELEGATE.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.id === 'deli-menu') DELEGATE.classList.add('show-deli');
});