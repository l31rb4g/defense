TowerArea = new Class({
    initialize: function(n){
        var el = new Element('div', {
            'class': 'towerArea' + (n == 2 ? ' b' : '')
        });
        for (var i=0; i<99; i++){
            new TowerSlot(i).inject(el);
        }
        return el;
    }
});


TowerSlot = new Class({
    initialize: function(i){
        return new Element('div', {
            'class': 'towerSlot' + (i%2 == 1 ? ' i' : '')
        });
    }
});