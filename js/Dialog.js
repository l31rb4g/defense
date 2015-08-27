Dialog = new Class({

    Implements: Options,

    options: {
        text: '',
        duration: 2500
    },

    initialize: function(options){
        this.setOptions(options);
        var el = new Element('div', {
            'class': 'dialog',
            'html': this.options.text
        }).inject($$('body')[0]);

        setTimeout(function(){

        }, this.options.duration)
    }

});