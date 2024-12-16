export const bottomMenu = [
    {
        "name": "Помощь",
        "link": "/help/",
        "nested_links": [
            {
                "name": "Помощь в подборе",
                "link": "/help/choose_help/"
            },
            {
                "name": "Доставка",
                "link": "/help/shipping/"
            },
            {
                "name": "Оплата заказа",
                "link": "/help/payment/"
            },
            {
                "name": "Возврат и гарантия",
                "link": "/help/return/"
            },
            {
                "name": "Обратная связь",
                "link": "/help/feedback/"
            },
            {
                "name": "Таблица размеров",
                "link": "/help/sizes-table/"
            },
            {
                "name": "Ремонт",
                "link": "/help/repair/"
            }
        ],
    },
    {
        "name": "Информация",
        "link": "/information/",
        "nested_links": [
            {
                "name": "Программа лояльности",
                "link": "/information/discounts/"
            },
            {
                "name": "Гарантия лучшей цены",
                "link": "/information/low_price/"
            },
            {
                "name": "Преимущества",
                "link": "/information/benefits/"
            },
            {
                "name": "Партнеры",
                "link": "/information/partners/"
            },
            {
                "name": "Карта сайта",
                "link": "/information/site-map/"
            },
            {
                "name": "Политика конфиденциальности",
                "link": "/information/policy-confidence/"
            }
        ],
    },
    {
        "name": "О компании",
        "link": "/about/",
        "nested_links": [
            {
                "name": "О нас",
                "link": "/about/"
            },
            {
                "name": "Адреса магазинов",
                "link": "/about/shops/"
            },
            {
                "name": "Контакты",
                "link": "/about/contacts/"
            },
            {
                "name": "Акции",
                "link": "/about/shares/"
            },
            {
                "name": "Реквизиты",
                "link": "/about/requisites/"
            }
        ],
    }
]


export const popularProducts =
{
    "title": "Популярные растения",
    "link": "/popular",
    "items": [
        {
            "name": "Кипарисовик Лавсона",
            "price": 1000,
            "is_available": true,
            "link": "/product/123123123",
            "props": {
                "Срок отправки": "c 15.03.25",
                "Стандарт поставки": "Горшок P9 (0.5 л)",
                "Латинское название": "Chamaecyparis",
                "Количество в упаковке штук": "1",
                "Тип растения": "Кустарник"
            }
        },
        {
            "name": "Сосна обыкновенная",
            "price": 1500,
            "is_available": false,
            "link": "/product/234234234",
            "props": {
                "Срок отправки": "c 20.04.25",
                "Стандарт поставки": "Горшок P12 (1 л)",
                "Латинское название": "Pinus sylvestris",
                "Количество в упаковке штук": "1",
                "Тип растения": "Дерево"
            }
        },
        {
            "name": "Ель голубая",
            "price": 2500,
            "is_available": true,
            "link": "/product/345345345",
            "props": {
                "Срок отправки": "c 01.05.25",
                "Стандарт поставки": "Горшок C5 (5 л)",
                "Латинское название": "Picea pungens",
                "Количество в упаковке штук": "1",
                "Тип растения": "Дерево"
            }
        },
        {
            "name": "Лаванда узколистная",
            "price": 800,
            "is_available": true,
            "link": "/product/456456456",
            "props": {
                "Срок отправки": "c 10.05.25",
                "Стандарт поставки": "Горшок P9 (0.5 л)",
                "Латинское название": "Lavandula angustifolia",
                "Количество в упаковке штук": "1",
                "Тип растения": "Цветок"
            }
        },
        {
            "name": "Барбарис Тунберга",
            "price": 1200,
            "is_available": false,
            "link": "/product/567567567",
            "props": {
                "Срок отправки": "c 25.05.25",
                "Стандарт поставки": "Горшок P9 (0.5 л)",
                "Латинское название": "Berberis thunbergii",
                "Количество в упаковке штук": "1",
                "Тип растения": "Кустарник"
            }
        }
    ],
}



export const mainPage = [

]

export const catalogData = [
    {
        "name": "Семена",
        "link": "/catalog/seeds",
        "subcategories": [
            { "name": "Овощи", "link": "/catalog/seeds/vegetables" },
            { "name": "Цветы", "link": "/catalog/seeds/flowers" },
            { "name": "Травы и зелень", "link": "/catalog/seeds/herbs" },
        ],
    },
    {
        "name": "Саженцы",
        "link": "/catalog/seedlings",
        "subcategories": [
            { "name": "Плодовые деревья", "link": "/catalog/seedlings/fruit-trees" },
            { "name": "Кустарники", "link": "/catalog/seedlings/shrubs" },
            { "name": "Виноград", "link": "/catalog/seedlings/grapes" },
        ],
    },
    {
        "name": "Удобрения",
        "link": "/catalog/fertilizers",
        "subcategories": [
            { "name": "Органические", "link": "/catalog/fertilizers/organic" },
            { "name": "Минеральные", "link": "/catalog/fertilizers/mineral" },
            { "name": "Компост и мульча", "link": "/catalog/fertilizers/compost" },
        ],
    },
    {
        "name": "Инструменты",
        "link": "/catalog/tools",
        "subcategories": [
            { "name": "Секаторы", "link": "/catalog/tools/secateurs" },
            { "name": "Лопаты", "link": "/catalog/tools/shovels" },
            { "name": "Грабли", "link": "/catalog/tools/rakes" },
        ],
    },
    {
        "name": "Теплицы и парники",
        "link": "/catalog/greenhouses",
        "subcategories": [
            { "name": "Теплицы", "link": "/catalog/greenhouses/structures" },
            { "name": "Пленка и укрывные материалы", "link": "/catalog/greenhouses/materials" },
            { "name": "Аксессуары", "link": "/catalog/greenhouses/accessories" },
        ],
    },
    {
        "name": "Садовый декор",
        "link": "/catalog/garden-decor",
        "subcategories": [
            { "name": "Фонари и подсветка", "link": "/catalog/garden-decor/lighting" },
            { "name": "Фигурки и скульптуры", "link": "/catalog/garden-decor/sculptures" },
            { "name": "Садовые дорожки", "link": "/catalog/garden-decor/pathways" },
        ],
    },
    {
        "name": "Полив",
        "link": "/catalog/irrigation",
        "subcategories": [
            { "name": "Шланги", "link": "/catalog/irrigation/hoses" },
            { "name": "Системы капельного полива", "link": "/catalog/irrigation/drip-systems" },
            { "name": "Лейки", "link": "/catalog/irrigation/watering-cans" },
        ],
    },
];


export const menuItems = [
    {
        "name": "Семена овощей",
        "link": "/vegetables_seeds",
        "subcategories": [
            {
                "name": "семена цветов",
                "link": "/flowers_seeds"
            },
            {
                "name": "семена уценка",
                "link": "/seeds_discount"
            }
        ]
    },
    {
        "name": "Розы",
        "link": "/roses",
        "subcategories": [
            {
                "name": "роза английская",
                "link": "/english_rose"
            },
            {
                "name": "семена уценка",
                "link": "/japanese_rose"
            },
            {
                "name": "канадская роза",
                "link": "/canadian_rose"
            }
        ]
    },
];

export const cartItems = [
    
];

export const searchResults = [
    {
        "name": "орхидея",
        "price": "123",
        "link": "/products/orchideya",
        "image": "/img/src/orchidey"
    }
];