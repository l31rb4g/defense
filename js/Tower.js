Tower = new Class({

    Implements: Options,

    options: {
        cadency: 10,
        attack: 10,
        cost: 1
    },

    initialize: function(app, slot){
        this.app = app;
        new Element('div', {
            'class': 'tower'
        }).replaces(slot);

        this.shooting = setInterval(function(){
            var el = $$('#arena .enemy');
            if (el.length > 0){
                el[0].retrieve('instance').receiveAttack(this.options.attack);
            }
        }.bind(this), 1000 - (this.options.cadency * 10));
    }
});