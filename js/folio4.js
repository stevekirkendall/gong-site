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

// Get window width
// var width = Math.max(window.screen.width, window.innerWidth);



      // Get the modals
    var modal0401 = document.getElementById("modal04-01");
    var modal0402 = document.getElementById("modal04-02");
    var modal0403 = document.getElementById("modal04-03");
    var modal0404 = document.getElementById("modal04-04");
    var modal0405 = document.getElementById("modal04-05");
    var modal0406 = document.getElementById("modal04-06");
    var modal0407 = document.getElementById("modal04-07");
    var modal0408 = document.getElementById("modal04-08");
    var modal0409 = document.getElementById("modal04-09");
    var modal0410 = document.getElementById("modal04-10");
    var modal0411 = document.getElementById("modal04-11");
    var modal0412 = document.getElementById("modal04-12");
    var modal0413 = document.getElementById("modal04-13");
    var modal0414 = document.getElementById("modal04-14");
    var modal0415 = document.getElementById("modal04-15");
    var modal0416 = document.getElementById("modal04-16");
    var modal0417 = document.getElementById("modal04-17");
    var modal0418 = document.getElementById("modal04-18");
    var modal0419 = document.getElementById("modal04-19");
    var modal0420 = document.getElementById("modal04-20");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var imgf401 = document.getElementById("f4-01");
    var imgf402 = document.getElementById("f4-02");
    var imgf403 = document.getElementById("f4-03");
    var imgf404 = document.getElementById("f4-04");
    var imgf405 = document.getElementById("f4-05");
    var imgf406 = document.getElementById("f4-06");
    var imgf407 = document.getElementById("f4-07");
    var imgf408 = document.getElementById("f4-08");
    var imgf409 = document.getElementById("f4-09");
    var imgf410 = document.getElementById("f4-10");
    var imgf411 = document.getElementById("f4-11");
    var imgf412 = document.getElementById("f4-12");
    var imgf413 = document.getElementById("f4-13");
    var imgf414 = document.getElementById("f4-14");
    var imgf415 = document.getElementById("f4-15");
    var imgf416 = document.getElementById("f4-16");
    var imgf417 = document.getElementById("f4-17");
    var imgf418 = document.getElementById("f4-18");
    var imgf419 = document.getElementById("f4-19");
    var imgf420 = document.getElementById("f4-20");

    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");

    var width = window.matchMedia('(min-width: 765px)');

    imgf401.onclick = function(e){
        if(width.matches){
            modal0401.classList.remove('shut');
        } else {
            return;
        }
    }
    imgf402.onclick = function(e){
        if(width.matches){
            modal0402.classList.remove('shut');
            } else {
            return;
            }    
    }
    imgf403.onclick = function(e){
        if(width.matches){
            modal0403.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf404.onclick = function(e){
        if(width.matches){
            modal0404.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf405.onclick = function(e){
        if(width.matches){
            modal0405.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf406.onclick = function(e){
        if(width.matches){
            modal0406.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf407.onclick = function(e){
        if(width.matches){
            modal0407.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf408.onclick = function(e){
        if(width.matches){
            modal0408.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf409.onclick = function(e){
        if(width.matches){
            modal0409.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf410.onclick = function(e){
        if(width.matches){
            modal0410.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf411.onclick = function(e){
        if(width.matches){
            modal0411.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf412.onclick = function(e){
        if(width.matches){
            modal0412.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf413.onclick = function(e){
        if(width.matches){
            modal0413.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf414.onclick = function(e){
        if(width.matches){
            modal0414.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf415.onclick = function(e){
        if(width.matches){
            modal0415.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf416.onclick = function(e){
        if(width.matches){
            modal0416.classList.remove('shut');
            } else {
            return;
            }      }
    imgf417.onclick = function(e){
        if(width.matches){
            modal0417.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf418.onclick = function(e){
        if(width.matches){
            modal0418.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf419.onclick = function(e){
        if(width.matches){
            modal0419.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf420.onclick = function(e){
        if(width.matches){
            modal0420.classList.remove('shut');
            } else {
            return;
            }      
    }


    var close = document.querySelectorAll('.close');

    var displayNone = function(e){
      e.target.parentElement.parentElement.classList.add('shut');
    }


    close.forEach(function(x){
      x.addEventListener('click', displayNone);
    });
    

 



