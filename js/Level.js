Level = new Class({

    initialize: function(level){
        this.level = level;
        this.setLevel();
        this['level' + level]();
    },

    setLevel: function(){
        $('level').set('text', 'Level ' + this.level);
    },

    level1: function(){
        new Wave('Enemy', 10, 300);
    }
});