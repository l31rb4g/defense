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
                'id': 'wallet',
                'text': '$ 0'
            })
        );
        return el;
    }
});