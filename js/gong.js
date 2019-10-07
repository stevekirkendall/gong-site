var header = document.querySelector('.dropdown-container header');

    header.addEventListener('click', openCurrAccordion, false);


    function openCurrAccordion(e) {
            var parent = header.parentElement;
            var article = header.nextElementSibling;

            if (this === header && !parent.classList.contains('open')) {
                parent.classList.add('open');
                article.style.maxHeight = article.scrollHeight + 'px';
            }
            else {
                parent.classList.remove('open');
                article.style.maxHeight = '0px';
            }
    }