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
    var modal0301 = document.getElementById("modal03-01");
    var modal0302 = document.getElementById("modal03-02");
    var modal0303 = document.getElementById("modal03-03");
    var modal0304 = document.getElementById("modal03-04");
    var modal0305 = document.getElementById("modal03-05");
    var modal0306 = document.getElementById("modal03-06");
    var modal0307 = document.getElementById("modal03-07");
    var modal0308 = document.getElementById("modal03-08");
    var modal0309 = document.getElementById("modal03-09");
    var modal0310 = document.getElementById("modal03-10");
    var modal0311 = document.getElementById("modal03-11");
    var modal0312 = document.getElementById("modal03-12");
    var modal0313 = document.getElementById("modal03-13");
    var modal0314 = document.getElementById("modal03-14");
    var modal0315 = document.getElementById("modal03-15");
    var modal0316 = document.getElementById("modal03-16");
    var modal0317 = document.getElementById("modal03-17");
    var modal0318 = document.getElementById("modal03-18");
    

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var imgf301 = document.getElementById("f3-01");
    var imgf302 = document.getElementById("f3-02");
    var imgf303 = document.getElementById("f3-03");
    var imgf304 = document.getElementById("f3-04");
    var imgf305 = document.getElementById("f3-05");
    var imgf306 = document.getElementById("f3-06");
    var imgf307 = document.getElementById("f3-07");
    var imgf308 = document.getElementById("f3-08");
    var imgf309 = document.getElementById("f3-09");
    var imgf310 = document.getElementById("f3-10");
    var imgf311 = document.getElementById("f3-11");
    var imgf312 = document.getElementById("f3-12");
    var imgf313 = document.getElementById("f3-13");
    var imgf314 = document.getElementById("f3-14");
    var imgf315 = document.getElementById("f3-15");
    var imgf316 = document.getElementById("f3-16");
    var imgf317 = document.getElementById("f3-17");
    var imgf318 = document.getElementById("f3-18");
    

// Check for window width greater than 765px &&
// window height greater than 400px
var width = window.matchMedia('(min-width: 765px)');
var height = window.matchMedia('(min-height: 400px)');


    imgf301.onclick = function(e){
        if(width.matches && height.matches){
            modal0301.classList.remove('shut');
        } else {
            return;
        }
    }
    imgf302.onclick = function(e){
        if(width.matches && height.matches){
            modal0302.classList.remove('shut');
            } else {
            return;
            }    
    }
    imgf303.onclick = function(e){
        if(width.matches && height.matches){
            modal0303.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf304.onclick = function(e){
        if(width.matches && height.matches){
            modal0304.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf305.onclick = function(e){
        if(width.matches && height.matches){
            modal0305.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf306.onclick = function(e){
        if(width.matches && height.matches){
            modal0306.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf307.onclick = function(e){
        if(width.matches && height.matches){
            modal0307.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf308.onclick = function(e){
        if(width.matches && height.matches){
            modal0308.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf309.onclick = function(e){
        if(width.matches && height.matches){
            modal0309.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf310.onclick = function(e){
        if(width.matches && height.matches){
            modal0310.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf311.onclick = function(e){
        if(width.matches && height.matches){
            modal0311.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf312.onclick = function(e){
        if(width.matches && height.matches){
            modal0312.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf313.onclick = function(e){
        if(width.matches && height.matches){
            modal0313.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf314.onclick = function(e){
        if(width.matches && height.matches){
            modal0314.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf315.onclick = function(e){
        if(width.matches && height.matches){
            modal0315.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf316.onclick = function(e){
        if(width.matches && height.matches){
            modal0316.classList.remove('shut');;
            } else {
            return;
            }      }
    imgf317.onclick = function(e){
        if(width.matches && height.matches){
            modal0317.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf318.onclick = function(e){
        if(width.matches && height.matches){
            modal0318.classList.remove('shut');
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

 



