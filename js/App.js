App = new Class({

    modules: [
        'Panel',
        'Arena',
        'TowerArea',
        'Tower'
    ],

    initialize: function(){
        this.load();
    },

    load: function(){
        var loaded = 0;
        var dt = String(new Date().getTime());
        this.modules.each(function(el) {
            Asset.javascript('js/' + el + '.js?t=' + dt, {
                onLoad: function () {
                    loaded++;
                    if (loaded == this.modules.length){
                        this.build();
                    }
                }.bind(this)
            });
        }.bind(this));
    },

    build: function(){
        new Element('div', {
            'id': 'app'
        }).adopt(
            new Panel(),
            new TowerArea(1),
            new Arena(),
            new TowerArea(2)
        ).inject($$('body')[0]);
    }

});

window.addEvent('domready', function(){
    new App();
});