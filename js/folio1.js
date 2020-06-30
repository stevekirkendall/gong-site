// CAROUSEL FUNCTIONALITY
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var slides = document.querySelectorAll('.carousel__slide');
var counter = 0;
var amount = slides.length;
var current = slides[0];
// const tabContent = tabby.querySelector('#' + target);

var navigate = function(direction){
    current.classList.remove('active');
    current.classList.remove('current');
    counter = counter + direction;
    if(direction === -1 && counter < 0){
        counter = amount - 1;
    }
    if(direction === 1 && !slides[counter]){
        counter = 0;
    }
    current = slides[counter];
    current.classList.add('active');
    current.classList.add('current');
};

next.addEventListener('click', function(e){
    navigate(1);
    console.log('CLICKED NEXT!!');
});

prev.addEventListener('click', function(e){
    navigate(-1);
    console.log('CLICKED PREV!!');
});

navigate(0);






/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
// MODAL FUNCTIONALITY
// Get the modal
var modal = document.querySelector('.modal');
var thumbnails = document.getElementsByClassName('masonry-layout-panel');
var thumbs = Array.from(thumbnails);
    
// Check for window width greater than 765px &&
// window height greater than 400px
var width = window.matchMedia('(min-width: 765px)');
var height = window.matchMedia('(min-height: 400px)');

// thumbnail opens modal
thumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        if(width.matches && height.matches){
            modal.classList.remove('shut');
        } else {
        return;
        }
    });
});

// 'Close' button closes modal
var close = document.querySelectorAll('.close');
var displayNone = function(e){
    e.target.parentElement.parentElement.classList.add('shut');
}

close.forEach(function(x){
    x.addEventListener('click', displayNone);
});

// modal closes modal
modal.addEventListener('click', e => {
if(!e.target.closest('.carousel')){
    modal.classList.add('shut');
}
});