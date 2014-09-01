var infoContainer = $('.info-container'),
    mainNavLink = $('.main-nav').find('li');

var Router = Backbone.Router.extend({
    routes: {
        "javascript": "javascript",
        "html": "html",
        "jquery": "jq",
        "css": "css",
        "less": "less",
        "sass": "sass",
        "other": "other",
        "": "main"
    },
    initialize: function() {
        Backbone.history.start();
    },
    checkClass: function() {
        if (!infoContainer.hasClass('.hide')) {
            infoContainer.addClass('hide');
        };       
    },
    clearClass: function() {
        mainNavLink.removeClass('active');
    },
    main: function() {
        this.checkClass();
        $('.main-container').removeClass('hide');   
        mainNavLink.removeClass('active');  
    },
    javascript: function() {
        this.checkClass();
        $('.javascript-container').removeClass('hide');
        this.clearClass();
        $('.btn-js').closest('li').addClass('active');
    },
    jq: function() {
        this.checkClass();
        $('.jquery-container').removeClass('hide');
        this.clearClass();
        $('.btn-jq').closest('li').addClass('active');
    },  
    html: function() {
        this.checkClass();
        $('.html-container').removeClass('hide');
        this.clearClass();
        $('.btn-html').closest('li').addClass('active');
    },
    css: function() {
        this.checkClass();
        $('.css-container').removeClass('hide');
        this.clearClass();
        $('.btn-css').closest('li').addClass('active');
    },
    less: function() {
        this.checkClass();
        $('.less-container').removeClass('hide');
        this.clearClass();
        $('.btn-less').closest('li').addClass('active');
    },
    sass: function() {
        this.checkClass();
        $('.sass-container').removeClass('hide');
        this.clearClass();
        $('.btn-sass').closest('li').addClass('active');
    },
    other: function() {
        this.checkClass();
        $('.other-container').removeClass('hide');
        this.clearClass();
        $('.btn-other').closest('li').addClass('active');
    }


});


