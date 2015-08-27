TowerSlot = new Class({

    cost: 1,

    initialize: function(app, i){
        this.app = app;
        return new Element('div', {
            'class': 'towerSlot' + (i % 2 == 1 ? ' i' : ''),
            'events': {
                'click': function(){
                    this.fireEvent('_click', this);
                },
                '_click': function(me){
                    if (this.app.cash >= this.cost){
                        this.app.cash -= this.cost;
                        new Tower(this.app, me);
                    }
                }.bind(this)
            }
        });
    }
});