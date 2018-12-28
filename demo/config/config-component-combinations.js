var config = {
    viewportIframe: [
        { viewport: '990px' }
    ],
    type: [
        {
            'type': 'noticia',
            'url': "http://www.google.com/",
            'publishedDate': "15-4-1028",
            'publishedTime': "12:00AM",
            "description": "type : noticia",
            "multimedia" : {
                "isGraph": true,
            }
        }
    ],
    headline: [
        {   
            'headline': "El acto por del fin.",
            "description": "normal title"
        }
    ],
    kicker: [
        {   
            'kicker': "Cintillo.",
            'kickerUrl': "http://www.google.com/",
            "description": "normal kicker with url"
        },
        {   
            'kicker': null,
            'kickerUrl': null,
            "description": "no kicker"
        }
    ],
    aboveheadline: [
        {   
            'aboveheadline': "Aboveheadline text.",
            "description": "with aboveheadline"
        },
        {   
            'aboveheadline': null,
            "description": "with no aboveheadline"
        }
    ],
    standfirst: [
        {   
            'standfirst': "Longer standfirst for test Longer standfirst for test Longer standfirst for test.",
            "description": "with standfirst"
        },
        {   
            
            'standfirst': null,
            "description": "with no standfirst"
        }
    ],
    authors: [
        {'byline': [
            {
                'name': 'Nombre del autor',
                'location': 'Madrid'
            }
        ], 'description': '1 author with location'},
        {'byline': [], 'description': 'no authors'},
        {'byline': [
            {
                'name': 'Nombre del autor',
                'location': 'Madrid'
            },
            {
                'name': 'Nombre del autor',
                'location': 'Madrid'
            }
        ], 'description': '2 author'}
    ],
    image: [
        {
            'image': require('../src/images/img-article.png'),
            'imageDescription': 'Políticos e invitados internacionales a las puertas del Palacete de Arnaga, en Cambo.',
            'imageSource': 'CARLOS GARCÍA POZO',
            "description": "with image, caption and author"
        },
        {'image': null, 'description': 'no image'},
        {
            'image':  require('../src/images/img-article.png'),
            "description": "with image, not caption or author"
        }
    ],
    comments: [
        { "comments": 34, "description": "with comments" },
        { "comments": null, "description": "no comments" }
    ],
    relatedLinks: [
        {
            "relatedLinks" : [
                {
                    "title": "Así fue el espectacular incendio que arrasó el edificio Grenfell en 2017",
                    "url": 'http://elmundo.es',
                    "kicker": "Álbum.",
                },
                {
                    "title": "ÁLBUM: así fue el espectacular incendio que arrasó el edificio Grenfell en 2017",
                    "url": 'http://elmundo.es'
                },
                {"title": "Maxim Huerta dimite al sentirse víctima de una jauría", "url": 'http://elmundo.es'}
  ],          
            "description": "2 related link"
        },
        {
            "relatedLinks": [],
            "description": "no related link"
        }
    ],
    classes: [
        {
            "classes": "ue-c-cover-content--s-from-mobile ue-c-cover-content--xs-from-phablet ue-c-cover-content--m-from-tablet ue-c-cover-content--vertical-from-tablet ue-c-cover-content--3cols-related-links-from-tablet"
        },
        {   
            "classes": "ue-c-cover-content--xxl-from-mobile ue-c-cover-content--3xl-from-tablet ue-c-cover-content--vertical-reverse-from-mobile ue-c-cover-content--media2of3-from-phablet ue-c-cover-content--link-grow-300-from-desktop ue-c-cover-content--media-right-from-phablet ue-c-cover-content--footer1of3-from-desktop ue-c-cover-content--footer-left-from-desktop"
        }
    ]
};

module.exports = config;
