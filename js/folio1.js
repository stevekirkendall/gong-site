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
    var modal0102 = document.getElementById("modal01-02");
    var modal0103 = document.getElementById("modal01-03");
    var modal0104 = document.getElementById("modal01-04");
    var modal0105 = document.getElementById("modal01-05");
    var modal0106 = document.getElementById("modal01-06");
    var modal0107 = document.getElementById("modal01-07");
    var modal0108 = document.getElementById("modal01-08");
    var modal0109 = document.getElementById("modal01-09");
    var modal0110 = document.getElementById("modal01-10");
    var modal0111 = document.getElementById("modal01-11");
    var modal0112 = document.getElementById("modal01-12");
    var modal0113 = document.getElementById("modal01-13");
    var modal0114 = document.getElementById("modal01-14");
    var modal0115 = document.getElementById("modal01-15");
    var modal0116 = document.getElementById("modal01-16");
    var modal0117 = document.getElementById("modal01-17");
    var modal0118 = document.getElementById("modal01-18");
    

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

// Check for window greater than 1020px
    var width = window.matchMedia('(min-width: 1020px)');

// Add event listeners on image divs

    imgf101.onclick = function(e){
        if(width.matches){
            modal0101.classList.remove('shut');
        } else {
            return;
        }
    }
    imgf102.onclick = function(e){
        if(width.matches){
            modal0102.classList.remove('shut');
            } else {
            return;
            }    
    }
    imgf103.onclick = function(e){
        if(width.matches){
            modal0103.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf104.onclick = function(e){
        if(width.matches){
            modal0104.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf105.onclick = function(e){
        if(width.matches){
            modal0105.classList.remove('shut');
            return;
            }      
    }
    imgf106.onclick = function(e){
        if(width.matches){
            modal0106.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf107.onclick = function(e){
        if(width.matches){
            modal0107.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf108.onclick = function(e){
        if(width.matches){
            modal0108.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf109.onclick = function(e){
        if(width.matches){
            modal0109.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf110.onclick = function(e){
        if(width.matches){
            modal0110.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf111.onclick = function(e){
        if(width.matches){
            modal0111.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf112.onclick = function(e){
        if(width.matches){
            modal0112.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf113.onclick = function(e){
        if(width.matches){
            modal0113.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf114.onclick = function(e){
        if(width.matches){
            modal0114.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf115.onclick = function(e){
        if(width.matches){
            modal0115.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf116.onclick = function(e){
        if(width.matches){
            modal0116.classList.remove('shut');
            } else {
            return;
            }      }
    imgf117.onclick = function(e){
        if(width.matches){
            modal0117.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf118.onclick = function(e){
        if(width.matches){
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