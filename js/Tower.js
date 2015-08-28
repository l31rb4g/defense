Tower = new Class({

    Implements: Options,

    options: {
        cadency: 10,
        attack: 10,
        cost: 1
    },

    initialize: function(app, slot){
        this.app = app;
        this.el = new Element('div', {
            'class': 'tower'
        }).replaces(slot);

        this.shooting = setInterval(function(){
            var els = $$('#arena .enemy');
            var shot = false;
            if (els.length > 0){
                els.each(function(el) {
                    var pos = {
                        x: el.getStyle('margin-left').toInt(),
                        y: el.getStyle('top').toInt()
                    };
                    if (pos.x > 0) {
                        if (!shot) {
                            this.shoot(el, pos);
                            shot = true;
                        }
                    }
                }.bind(this));
            }
        }.bind(this), 1000 - (this.options.cadency * 10));
    },

    getDistance: function(enemy){

    },

    getPosition: function(){
        var n = this.el.getParent().getElements('div').indexOf(this.el);
        var line = 0;
        while (n >= 25){
            line++;
            n -= 25;
        }
        var y = 0;
        var b = this.el.getParent().hasClass('b');
        if (b){
            y += $('arena').getSize().y + (this.el.getSize().y / 2) - 2;
            y += line * this.el.getSize().y;
        } else {
            y -= (this.el.getSize().y / 2) + 2;
            y -= (line == 2 ? 0 : (line == 0 ? 2 : line)) * this.el.getSize().y;
        }
        return {
            x: Math.ceil((this.el.getSize().x * n) + (this.el.getSize().x / 2) - 2),
            y: y
        };
    },

    shoot: function(enemy, pos){
        this.getPosition();
        enemy.retrieve('instance').receiveAttack(this.options.attack);
        var bpos = this.getPosition();
        var bullet = new Element('div', {
            'class': 'bullet',
            'styles': {
                'top': bpos.y,
                'margin-left': bpos.x
            },
            'morph': {
                'transition': Fx.Transitions.Quint.easeOut,
                'duration': 1000
            }
        });
        bullet.inject($('arena')).morph({
            'top': pos.y,
            'margin-left': pos.x + 10
        }).get('morph').chain(function(){
            this.dispose();
        }.bind(bullet));
        setTimeout(function(){
            this.hide();
        }.bind(bullet), 400);
    }
});