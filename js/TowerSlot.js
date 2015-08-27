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
                        this.app.spend(this.cost);
                        new Tower(this.app, me);
                    } else {
                        new Dialog({
                            'text': 'Você não tem dinheiro suficiente!',
                            'close': 1
                        });
                    }
                }.bind(this)
            }
        });
    }
});