const data =  {
    "menu": [{
            "name": "Главная",
            "link": "/"
        },
        {
            "name": "Счета",
            "link": "/accounts"
        },
        {
            "name": "Мои услуги",
            "link": "/services"
        },
        {
            "name": "Поддержка",
            "link": "/support",
            "messages": 1
        },
        {
            "name": "документация",
            "link": "/documentation"
        }
    ],
    "sideBarNav": [{
            "text": "Безопасность и управление трафиком",
            "src": "/img/svg/chart-bars.svg",
            "link": "#",
            "alt": ""
        },
        {
            "text": "вычислительные ресурсы и хранение данных ",
            "src": "/img/svg/cloud-sync.svg",
            "link": "#",
            "alt": ""
        },
        {
            "text": "профессиональные сервисы",
            "src": "/img/svg/hat.svg",
            "link": "#",
            "alt": ""
        }
    ],
    "sideBarList": ["Москва", "С-Петербург", "Владивосток", "Берлин"],
    "userParams": {
        "userData": {
            "name": "Deynis",
            "mail": "denis@jarency.ru"
        },
        "cartsParams": [{
                "type": "balans",
                "value": 75000,
                "isSmall": true
            },
            {
                "type": "services",
                "value": 1,
                "isSmall": true
            },
            {
                "type": "support",
                "value": 1,
                "isSmall": false
            }
        ]
    },
    "cartTypes": [{
            "type": "balans",
            "title": "Баланс",
            "text": "На балансе: ",
            "valueProp": "p.",
            "link": "/accounts"
        },
        {
            "type": "services",
            "title": "Мои услуги",
            "text": "Подключена ",
            "valueProp": "услуга",
            "link": "/services",
            "linkText": "Добавить услуги"
        },
        {
            "type": "support",
            "title": "Поддержка",
            "text": "У вас ",
            "valueProp": "заявка",
            "link": "/accounts"
        }
    ],
    "footerInfo": {
        "adress": "Москва,&nbsp;121596<br />ул.&nbsp;Горбунова,&nbsp;2, стр.&nbsp;3",
        "mail": "info@mandarin.solutions",
        "phone": "+7 495 269 20 20",
        "www": "www.mandarin.solutions",
        "name": "ООО&nbsp;&laquo;Мандарин солюшенс&raquo;, 2018"
    }
}

export default data
