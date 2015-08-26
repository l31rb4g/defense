App = new Class({

    initialize: function(){
        this.load();
    },

    load: function(){
        var modules = [
            'TowerArea',
            'Tower'
        ];
        var loaded = 0;
        var dt = String(new Date().getTime());
        modules.each(function(el) {
            Asset.javascript('js/' + el + '.js?t=' + dt, {
                onLoad: function () {
                    loaded++;
                    if (loaded == modules.length){
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
            new TowerArea(1),
            new TowerArea(2)
        ).inject($$('body')[0]);
    }

});

window.addEvent('domready', function(){
    new App();
});