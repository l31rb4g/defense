Wave = new Class({
    initialize:  function(enemy, qtd, interval){
        for (var i=0; i<qtd; i++) {
            setTimeout(function() {
                new window[enemy]();
            }, interval * i);
        }
    }
});