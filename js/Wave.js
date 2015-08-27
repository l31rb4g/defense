Wave = new Class({
    initialize:  function(level){
        this.level = level;
        new Enemy(this.level);
    }
});