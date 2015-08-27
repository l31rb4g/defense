App = new Class({

    modules: [
        'Panel',
        'Arena',
        'TowerArea',
        'TowerSlot',
        'Tower',
        'Level',
        'Enemy',
        'Wave'
    ],

    level: 0,

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
            new Element('div', {'id': 'rightPanel'}).adopt(
                new TowerArea(1),
                new Arena(),
                new TowerArea(2)
            )
        ).inject($$('body')[0]);
        this.startGame();
    },

    startGame: function(){
        this.level = 1;
        new Level(this.level);
    }

});

window.addEvent('domready', function(){
    window.app = new App();
});