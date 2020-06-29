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

// Get the modals
    var modal0101 = document.getElementById("modal01-01");
    
    

// Get the image divs
    var imgf101 = document.getElementById("f1-01");
    var imgf102 = document.getElementById("f1-02");
    var imgf103 = document.getElementById("f1-03");
    var imgf104 = document.getElementById("f1-04");
    var imgf105 = document.getElementById("f1-05");
    var imgf106 = document.getElementById("f1-06");
    var imgf107 = document.getElementById("f1-07");
    var imgf108 = document.getElementById("f1-08");
    var imgf109 = document.getElementById("f1-09");
    var imgf110 = document.getElementById("f1-10");
    var imgf111 = document.getElementById("f1-11");
    var imgf112 = document.getElementById("f1-12");
    var imgf113 = document.getElementById("f1-13");
    var imgf114 = document.getElementById("f1-14");
    var imgf115 = document.getElementById("f1-15");
    var imgf116 = document.getElementById("f1-16");
    var imgf117 = document.getElementById("f1-17");
    var imgf118 = document.getElementById("f1-18");

    
// Check for window width greater than 765px &&
// window height greater than 400px
var width = window.matchMedia('(min-width: 765px)');
var height = window.matchMedia('(min-height: 400px)');


    imgf101.onclick = function(e){
        if(width.matches && height.matches){
            modal0101.classList.remove('shut');
        } else {
            return;
        }
    }
    imgf102.onclick = function(e){
        if(width.matches && height.matches){
            modal0102.classList.remove('shut');
            } else {
            return;
            }    
    }
    imgf103.onclick = function(e){
        if(width.matches && height.matches){
            modal0103.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf104.onclick = function(e){
        if(width.matches && height.matches){
            modal0104.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf105.onclick = function(e){
        if(width.matches && height.matches){
            modal0105.classList.remove('shut');
            return;
            }      
    }
    imgf106.onclick = function(e){
        if(width.matches && height.matches){
            modal0106.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf107.onclick = function(e){
        if(width.matches && height.matches){
            modal0107.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf108.onclick = function(e){
        if(width.matches && height.matches){
            modal0108.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf109.onclick = function(e){
        if(width.matches && height.matches){
            modal0109.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf110.onclick = function(e){
        if(width.matches && height.matches){
            modal0110.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf111.onclick = function(e){
        if(width.matches && height.matches){
            modal0111.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf112.onclick = function(e){
        if(width.matches && height.matches){
            modal0112.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf113.onclick = function(e){
        if(width.matches && height.matches){
            modal0113.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf114.onclick = function(e){
        if(width.matches && height.matches){
            modal0114.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf115.onclick = function(e){
        if(width.matches && height.matches){
            modal0115.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf116.onclick = function(e){
        if(width.matches && height.matches){
            modal0116.classList.remove('shut');
            } else {
            return;
            }      }
    imgf117.onclick = function(e){
        if(width.matches && height.matches){
            modal0117.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf118.onclick = function(e){
        if(width.matches && height.matches){
            modal0118.classList.remove('shut');
            } else {
            return;
            }      
    }
 

// 'Close' button functionality

    var close = document.querySelectorAll('.close');

    var displayNone = function(e){
      e.target.parentElement.parentElement.classList.add('shut');
    }

    close.forEach(function(x){
      x.addEventListener('click', displayNone);
    });