;(function(undefined) {

    /*================================================================
                        >>> APP MODULE <<<  
      ================================================================*/
    var app = (function() {
        /*================================================================
                    >>> VARIABLES <<<  
        ================================================================*/
        var dynamicContent = document.querySelector('.code-container-dynamic'),
            menuBtns = document.querySelectorAll('.btn-main'),
            mainNavLists = document.querySelectorAll('.main-nav li');

        /*================================================================
                            >>> HELPERS FUNCTION <<<  
          ================================================================*/
        function removeClass(element, className) {
            for (var i = 0, l = element.length; i < l; i++) {
                element[i].className = element[i].className.replace(/\b\+'className'\+\b/,'');
            };
        };

        /*================================================================
                            >>> HANDLERS <<<  
          ================================================================*/
        setListeners();   
        function setListeners() {

            hangListeners(menuBtns);
            function hangListeners(el) {
                for (var i = 0, l = el.length; i < l; i++) {
                    el[i].addEventListener('click', callBackListener);
                };
            };    
        };

        function callBackListener() {
            var self = this;
            console.log(self.dataset.attr);
            if ( !self.parentNode.className.match(/(?:^|\s)active(?!\S)/) ) {
                removeClass(mainNavLists, 'active');
                self.parentNode.className += " active";
            } else {
                // self.parentNode.className.replace(/\bactive\b/,'');
            };
        };









    })(); //end of app
})();
