// window.onresize = function() {
//     document.body.height = window.innerHeight;
// }
// window.onresize(); // called to initially set the height.



var header = document.querySelector('.dropdown-container header');
// var para = document.querySelector('.dropdown-container header p');

    header.addEventListener('click', openCurrAccordion, false);


    function openCurrAccordion(e) {
            var parent = header.parentElement;
            var article = header.nextElementSibling;

            if (this === header && !parent.classList.contains('open')) {
                parent.classList.add('open');
                // para.classList.add('here');
                article.style.maxHeight = article.scrollHeight + 'px';
            }
            else {
                parent.classList.remove('open');
                // para.classList.remove('here');
                article.style.maxHeight = '0px';
            }
    }

    