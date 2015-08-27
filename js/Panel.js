Panel = new Class({
    initialize: function(){
        var el = new Element('div', {
            'id': 'panel'
        }).adopt(
            new Element('div', {
                'id': 'level',
                'html': '&nbsp;'
            }),
            new Element('div', {
                'id': 'life'
            }),
            new Element('div', {
                'id': 'wallet',
                'text': '$ 0'
            })
        );
        for (var i=0; i<10; i++){
            new Element('span', {
                'class': 'heart',
                'text': '<3'
            }).inject(el.getElements('div')[1]);
        }
        return el;
    }
});