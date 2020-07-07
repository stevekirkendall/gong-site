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

// FOR CAROUSEL FUNCTIONALITY
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var slides = Array.from(document.querySelectorAll('.carousel__slide'));
var carouselContents = document.querySelector('.carousel__contents');
var currentSlide = carouselContents.querySelector('.active');

// thumbnail opens modal
thumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        if(width.matches && height.matches){
            modal.classList.remove('shut');
            var target = thumb.dataset.target;
            var carouselContents = document.querySelector('.carousel__contents');
            var carouselContentsFirstChild = carouselContents.firstElementChild;
            var carouselContentsLastChild = carouselContents.lastElementChild;
            var carouselItems = Array.from(carouselContents.getElementsByTagName('li'));
            for (var i = 0; i < carouselItems.length; i++){
                carouselItems[i].classList.remove('active');
            }
            var largeImg = carouselContents.querySelector('#' + target);
            largeImg.classList.add('active');
        
            if (largeImg === carouselContentsFirstChild){
                prev.style.visibility = 'hidden';
            }
            if (largeImg === carouselContentsLastChild){
                next.style.visibility = 'hidden';
            }

        } else {
        return;
        }
    });
});

// 'Close' button closes modal
// var close = document.querySelectorAll('.close');

// var displayNone = function(e){
//     e.target.parentElement.classList.add('shut');
// }

// close.forEach(function(x){
//     x.addEventListener('click', displayNone);
// });

// modal closes modal
modal.addEventListener('click', e => {
if(!e.target.closest('.carousel')){
    modal.classList.add('shut');
    next.style.visibility = 'visible';
    prev.style.visibility = 'visible';

}
});






next.addEventListener('click', function(e){
        console.log('CLICKED NEXT!!');
        var currentSlide = carouselContents.querySelector('.active');
        var nextSlide = currentSlide.nextElementSibling;
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
        prev.style.visibility = 'visible';

        if(!nextSlide.nextElementSibling){
            next.style.visibility = 'hidden';
        }


});

prev.addEventListener('click', function(e){
    console.log('CLICKED PREV!!');
    var currentSlide = carouselContents.querySelector('.active');
    var previousSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove('active');
    previousSlide.classList.add('active');
    next.style.visibility = 'visible';

    if(!previousSlide.previousElementSibling){
        prev.style.visibility = 'hidden';
    };

});

