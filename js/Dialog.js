Dialog = new Class({

    Implements: Options,

    options: {
        text: '',
        duration: 2500
    },

    initialize: function(options){
        this.setOptions(options);
        console.log($('app').getSize().x / 2)
        var el = new Element('div', {
            'class': 'dialog',
            'html': this.options.text,
            'styles': {
                'top': $('app').getSize().y / 2,
                'left': $('app').getSize().x / 2
            }
        }).inject(app.el);
        el.setStyles({
            'margin-top': el.getSize().y / -2,
            'margin-left': el.getSize().x / -2
        })
    }

});