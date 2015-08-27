TowerArea = new Class({
    initialize: function(app, n){
        this.app = app;
        var el = new Element('div', {
            'class': 'towerArea' + (n == 2 ? ' b' : '')
        });
        for (var i=0; i<75; i++){
            new TowerSlot(this.app, i).inject(el);
        }
        return el;
    }
});