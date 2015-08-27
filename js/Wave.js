Wave = new Class({

    running: false,

    initialize:  function(enemy, qtd, interval){
        this.running = true;
        for (var i=0; i<qtd; i++) {
            setTimeout(function() {
                new window[enemy]();
            }, interval * i);
        }
    }
});