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
            mainNavLists = document.querySelectorAll('.main-nav li'),
            loader = document.querySelector('.loader');

        /*================================================================
                            >>> HELPERS FUNCTION <<<  
          ================================================================*/
        function removeClass(element, className) {
            var reg = new RegExp(className, "g");
            for (var i = 0, l = element.length; i < l; i++) {
                element[i].className = element[i].className.replace(reg,'');
            };
        };

        function ajaxLoad(url) {
            var xhr = new XMLHttpRequest(),
                data;
            xhr.onreadystatechange = ajaxState;

            function ajaxState() {
                if (xhr.readyState === 4) {
                    var status = xhr.status;
                    if (status >= 200 && status < 300 || status === 304) {
                        data = xhr.responseText;
                        addLoadedPage(data);
                        Prism.highlightAll(data);
                    } else {
                        console.log('Error');
                    };
                };
            };
            xhr.open('GET', url, true);
            xhr.send();
        };

        function addLoadedPage(content) {
            dynamicContent.innerHTML = content;
        }

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

            if ( !self.parentNode.className.match(/(?:^|\s)active(?!\S)/) ) {
                removeClass(mainNavLists, 'active');
                self.parentNode.className += " active";
            };

            if (self.dataset.attr = "js") {
                var getPage = ajaxLoad('pages/JavaScript/javascript.html');

            };
        };









    })(); //end of app
})();
