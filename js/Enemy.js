Enemy = new Class({

    initialize: function(level){
        this.level = level;
        new Element('div', {
            'class': 'enemy'
        }).inject($('arena'));
        console.log('ok')
    }

});