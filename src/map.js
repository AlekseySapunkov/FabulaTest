ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.980995, 37.414549],
        zoom: 5
    }, {
        searchControlProvider: 'yandex#search'
    });

myMap.geoObjects
    .add(new ymaps.Placemark([55.980995, 37.414549], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: ''
    }, {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '50'
    }));
}