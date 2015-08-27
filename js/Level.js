Level = new Class({

    initialize: function(level, callback){
        this.level = level;
        this.callback = callback;
        this.setLevel();
        this.watch();
        this['level' + this.level]();
    },

    setLevel: function(){
        $('level').set('text', 'Level ' + this.level);
    },

    watch: function(){
        this.watcher = setInterval(function(){
            var l = $$('#arena .enemy').length;
            console.log(l)
            if (l === 0){
                clearInterval(this.watcher);
                if (typeof(this.callback) == 'function') {
                    this.callback();
                }
            }
        }.bind(this), 1000);
    },

    level1: function(){
        new Wave('Enemy', 10, 300);
    },

    level2: function(){
        new Wave('Enemy', 12, 280);
    }
});