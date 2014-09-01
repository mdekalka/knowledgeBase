;(function(undefined) {
jQuery(document).ready(function($) {
        


    /*================================================================
                        >>> ADD ROUTER(BACKBONE) <<<  
      ================================================================*/
    var addRouter = addRouter || {};
    addRouter.router = new Router();

    /*================================================================
                        >>> APP MODULE <<<  
      ================================================================*/
    var app = (function() {
        /*================================================================
                    >>> VARIABLES <<<  
        ================================================================*/
        var dynamicContent = $('.code-container-dynamic'),
            menuBtns = $('.btn-main'),
            asideLinks = $('.info-nav  a'),
            loader = $('.loader'),
            infoContainers = $('.info-container'),
            currentArticle = "";

        /*================================================================
                            >>> HELPERS FUNCTION <<<  
          ================================================================*/

        //***==========================================================***//

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
                        $('.' + currentArticle + '-container').find('.info-block').empty()    
                    };
                };
            };
            xhr.open('GET', url, true);
            xhr.send();
        };

        function addLoadedPage(content) {
            $('.' + currentArticle + '-container').find('.info-block').empty().append(content);
        };

        /*================================================================
                            >>> HANDLERS <<<  
          ================================================================*/
        setListeners();   
        function setListeners() {
            menuBtns.on('click', mainMenuCallback);
            asideLinks.on('click', asideMenuCallback)

        };
        //***==========================================================***//

        function mainMenuCallback() {
            var self = $(this);
            currentArticle = self.attr("href").replace("#", "");
        };

        function asideMenuCallback() {
            var self = $(this),
                linkTarget = self.data("link");
            asideLinks.closest('li').removeClass('active')
            self.closest('li').addClass('active');

            loadArticle();
            function loadArticle() {
                if (currentArticle !== undefined && linkTarget !== undefined) {
                   ajaxLoad('pages/' + currentArticle + '/' + linkTarget + '.html');  
                }
                
            };
        };














    })(); //end of app

});    
})();
