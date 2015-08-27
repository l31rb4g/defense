Tower = new Class({
    initialize: function(slot){
        new Element('div', {
            'class': 'tower'
        }).replaces(slot);
    }
});