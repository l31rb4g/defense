Enemy = new Class({

    Implements: Options,

    options: {
        speed: 10,
        defense: 10
    },

    initialize: function(level){
        this.level = level;
        this.el = new Element('div', {
            'class': 'enemy',
            'styles': {
                'top': '49%'
            },
            'morph': {
                'duration': 1000 - this.options.speed
            }
        }).inject($('arena'));
        this.walk();
    },

    walk: function(){
        var yrange = 100;
        var target = {
            x: Math.ceil($('arena').getSize().x * (this.options.speed / 100)),
            y: Math.ceil(Math.random() * yrange) - yrange
        };

        var left = this.el.getStyle('margin-left').toInt();
        target.x += left;

        var top = this.el.getStyle('margin-top').toInt();
        if (Math.ceil(Math.random() * 2) == 1) {
            target.y += top;
        } else {
            target.y -= top;
        }

        var min_top = ((($('arena').getSize().y / 2) - 7) * -1);
        if (target.y < min_top){
            target.y = min_top;
        }
        var max_top = (($('arena').getSize().y / 2) - 10);
        if (target.y > max_top){
            target.y = max_top;
        }

        if (this.el.getStyle('margin-left').toInt() > $('arena').getSize().x){
            this.die();
        } else {
            this.el.morph({
                'margin-left': target.x,
                'margin-top': target.y
            });

            setTimeout(function () {
                this.walk();
            }.bind(this), 250);
        }
    },

    receiveDamage: function(){

    },

    makeDamage: function(){

    },

    die: function(){
        this.el.dispose();
    }

});