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
    var modal0201 = document.getElementById("modal02-01");
    var modal0202 = document.getElementById("modal02-02");
    var modal0203 = document.getElementById("modal02-03");
    var modal0204 = document.getElementById("modal02-04");
    var modal0205 = document.getElementById("modal02-05");
    var modal0206 = document.getElementById("modal02-06");
    var modal0207 = document.getElementById("modal02-07");
    var modal0208 = document.getElementById("modal02-08");
    var modal0209 = document.getElementById("modal02-09");
    var modal0210 = document.getElementById("modal02-10");
    var modal0211 = document.getElementById("modal02-11");
    var modal0212 = document.getElementById("modal02-12");
    var modal0213 = document.getElementById("modal02-13");
    var modal0214 = document.getElementById("modal02-14");
    var modal0215 = document.getElementById("modal02-15");
    var modal0216 = document.getElementById("modal02-16");
    var modal0217 = document.getElementById("modal02-17");
    var modal0218 = document.getElementById("modal02-18");
    var modal0219 = document.getElementById("modal02-19");
    var modal0220 = document.getElementById("modal02-20");
    var modal0221 = document.getElementById("modal02-21");
    var modal0222 = document.getElementById("modal02-22");
    var modal0223 = document.getElementById("modal02-23");
    var modal0224 = document.getElementById("modal02-24");
    

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var imgf201 = document.getElementById("f2-01");
    var imgf202 = document.getElementById("f2-02");
    var imgf203 = document.getElementById("f2-03");
    var imgf204 = document.getElementById("f2-04");
    var imgf205 = document.getElementById("f2-05");
    var imgf206 = document.getElementById("f2-06");
    var imgf207 = document.getElementById("f2-07");
    var imgf208 = document.getElementById("f2-08");
    var imgf209 = document.getElementById("f2-09");
    var imgf210 = document.getElementById("f2-10");
    var imgf211 = document.getElementById("f2-11");
    var imgf212 = document.getElementById("f2-12");
    var imgf213 = document.getElementById("f2-13");
    var imgf214 = document.getElementById("f2-14");
    var imgf215 = document.getElementById("f2-15");
    var imgf216 = document.getElementById("f2-16");
    var imgf217 = document.getElementById("f2-17");
    var imgf218 = document.getElementById("f2-18");
    var imgf219 = document.getElementById("f2-19");
    var imgf220 = document.getElementById("f2-20");
    var imgf221 = document.getElementById("f2-21");
    var imgf222 = document.getElementById("f2-22");
    var imgf223 = document.getElementById("f2-23");
    var imgf224 = document.getElementById("f2-24");
    

    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");

    var width = window.matchMedia('(min-width: 765px)');

    imgf201.onclick = function(e){
        if(width.matches){
            modal0201.classList.remove('shut');
        } else {
            return;
        }
    }
    imgf202.onclick = function(e){
        if(width.matches){
            modal0202.classList.remove('shut');
            } else {
            return;
            }    
    }
    imgf203.onclick = function(e){
        if(width.matches){
            modal0203.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf204.onclick = function(e){
        if(width.matches){
            modal0204.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf205.onclick = function(e){
        if(width.matches){
            modal0205.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf206.onclick = function(e){
        if(width.matches){
            modal0206.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf207.onclick = function(e){
        if(width.matches){
            modal0207.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf208.onclick = function(e){
        if(width.matches){
            modal0208.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf209.onclick = function(e){
        if(width.matches){
            modal0209.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf210.onclick = function(e){
        if(width.matches){
            modal0210.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf211.onclick = function(e){
        if(width.matches){
            modal0211.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf212.onclick = function(e){
        if(width.matches){
            modal0212.classList.remove('shut');;
            } else {
            return;
            }      
    }
    imgf213.onclick = function(e){
        if(width.matches){
            modal0213.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf214.onclick = function(e){
        if(width.matches){
            modal0214.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf215.onclick = function(e){
        if(width.matches){
            modal0215.classList.remove('shut');
        } else {
            return;
            }      
    }
    imgf216.onclick = function(e){
        if(width.matches){
            modal0216.classList.remove('shut');
            } else {
            return;
            }
    }
    imgf217.onclick = function(e){
        if(width.matches){
            modal0217.classList.remove('shut');
            } else {
            return;
            }     
    }
    imgf218.onclick = function(e){
        if(width.matches){
            modal0218.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf219.onclick = function(e){
        if(width.matches){
            modal0219.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf220.onclick = function(e){
        if(width.matches){
            modal0220.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf221.onclick = function(e){
        if(width.matches){
            modal0221.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf222.onclick = function(e){
        if(width.matches){
            modal0222.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf223.onclick = function(e){
        if(width.matches){
            modal0223.classList.remove('shut');
            } else {
            return;
            }      
    }
    imgf224.onclick = function(e){
        if(width.matches){
            modal0224.classList.remove('shut');
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
    

 



