Arena = new Class({
    initialize: function(app){
        this.app = app;
        var el = new Element('div', {
            'id': 'arena'
        });
        return el;
    }
});