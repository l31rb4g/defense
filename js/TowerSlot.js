TowerSlot = new Class({
    initialize: function(i){
        return new Element('div', {
            'class': 'towerSlot' + (i%2 == 1 ? ' i' : ''),
            'events': {
                'click': function(){
                    new Tower(this);
                }
            }
        });
    }
});