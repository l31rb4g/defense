Level = new Class({

    initialize: function(level, callback){
        this.level = level;
        this.callback = callback;
        this.setLevel();
        this.watch();
        this.startLevel();
    },

    setLevel: function(){
        $('level').set('text', 'Level ' + this.level);
    },

    watch: function(){
        this.watcher = setInterval(function(){
            var l = $$('#arena .enemy').length;
            if (l === 0){
                clearInterval(this.watcher);
                if (typeof(this.callback) == 'function') {
                    this.callback();
                }
            }
        }.bind(this), 1000);
    },

    startLevel: function(){
        new Wave('Enemy', 9, 510);
    }
});