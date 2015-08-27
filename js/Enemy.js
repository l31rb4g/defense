Enemy = new Class({

    Implements: Options,

    options: {
        speed: 50,
        defense: 10
    },

    initialize: function(level){
        this.level = level;
        this.el = new Element('div', {
            'class': 'enemy',
            'styles': {
                'top': Math.ceil(Math.random() * ($('arena').getSize().y - 16))
            },
            'morph': {
                'duration': 1000 - this.options.speed
            }
        }).inject($('arena'));
        this.walk();
    },

    walk: function(){
        var yrange = 10;
        var target = {
            x: Math.ceil($('arena').getSize().x * (this.options.speed / 100)) + this.el.getStyle('margin-left').toInt(),
            y: this.el.getStyle('top').toInt()
        };

        if (Math.ceil(Math.random() * 2) == 1) {
            target.y += (Math.random() * yrange);
        } else {
            target.y -= (Math.random() * yrange);
        }
        if (target.y < 0){
            target.y = 0;
        }
        var max_top = Math.ceil($('arena').getSize().y - this.el.getSize().y - 1);
        if (target.y > max_top){
            target.y = max_top;
        }

        if (this.el.getStyle('margin-left').toInt() >= $('arena').getSize().x){
            this.makeDamage();
            this.die();
        } else {
            this.el.morph({
                'margin-left': target.x,
                'top': target.y
            });

            setTimeout(function () {
                this.walk();
            }.bind(this), 250);
        }
    },

    receiveDamage: function(){

    },

    makeDamage: function(){
        $$('body')[0].setStyle('background-color', '#f00');
        $$('body')[0].tween('background-color', '#fff');
        var heart = $('life').getElement('.heart');
        if (heart){
            heart.dispose();
        } else {
            app.gameOver();
        }
    },

    die: function(){
        this.el.dispose();
    }

});