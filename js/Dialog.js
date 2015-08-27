Dialog = new Class({

    Implements: Options,

    options: {
        text: '',
        duration: 2500,
        close: false
    },

    initialize: function(options){
        this.setOptions(options);
        this.el = new Element('div', {
            'class': 'dialog',
            'html': this.options.text,
            'styles': {
                'top': $('app').getSize().y / 2,
                'left': $('app').getSize().x / 2
            }
        }).inject(app.el);
        this.el.setStyles({
            'margin-top': this.el.getSize().y / -2,
            'margin-left': this.el.getSize().x / -2
        });
        if (this.el.getElement('.cron')){
            this.cron = setInterval(function(){
                var el = this.el.getElement('.cron');
                if (el) el.set('text', el.get('text').toInt() - 1);
            }.bind(this), 1000);
        }
        if (this.options.close){
            setTimeout(function(){
                this.close();
            }.bind(this), this.options.close * 1000);
        }
    },

    close: function(){
        clearInterval(this.cron);
        this.el.dispose();
    }

});