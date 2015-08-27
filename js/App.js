App = new Class({

    modules: [
        'Panel',
        'Arena',
        'TowerArea',
        'TowerSlot',
        'Tower',
        'Level',
        'Enemy',
        'Wave',
        'Dialog'
    ],

    running: false,

    level: 0,

    cash: 10,

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
        this.el = new Element('div', {
            'id': 'app'
        }).adopt(
            new Panel(this),
            new Element('div', {'id': 'rightPanel'}).adopt(
                new TowerArea(1),
                new Arena(),
                new TowerArea(2)
            )
        ).inject($$('body')[0]);
        this.startGame();
    },

    startGame: function(){
        this.running = true;
        this.level = 1;
        var getReady = 9;
        new Dialog({
            'text': 'Prepare-se para a primeira onda! Começando em <span class="cron">' + getReady + '</span>...',
            'close': getReady
        });
        setTimeout(function() {
            new Level(this.level, function () {
                this.nextLevel();
            }.bind(this));
        }.bind(this), getReady * 1000);
    },

    nextLevel: function(){
        this.level++;
        console.log('Level ' + this.level);
        new Level(this.level);
    },

    gameOver: function(){
        if (!this.running) return;
        this.running = false;
        console.log('game over')
    }

});

window.addEvent('domready', function(){
    window.app = new App();
});