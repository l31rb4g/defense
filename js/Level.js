Level = new Class({

    initialize: function(level){
        this.level = level;
        this.setLevel();
        new Wave(this.level);
    },

    setLevel: function(){
        $('level').set('text', 'Level ' + this.level);
    }
});