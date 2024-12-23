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


export const popularProducts = {
    title: "Популярные товары",
    items: [
        {
            product_id: 1,
            name: "Подсолнух",
            slug: "podsolnuh-96dff206366a26741b4c04310499492e",
            quantity: 12,
            price: 50,
            is_available: true,
            is_preorder: false,
            category_name: "Растения Дейва",
            images: ["/media/products/images/139f83d5eff8aaeefebc775a167a4012.webp"],
            link: "/product/podsolnuh-96dff206366a26741b4c04310499492e",
        },
        {
            product_id: 2,
            name: "Кактус",
            slug: "kaktus-78bb36a9157348cbab8edc56fae5dbf8",
            quantity: 5,
            price: 120,
            is_available: true,
            is_preorder: false,
            category_name: "Суккуленты",
            images: [],
            link: "/product/kaktus-78bb36a9157348cbab8edc56fae5dbf8",
        },
        {
            product_id: 3,
            name: "Орхидея",
            slug: "orchidea-a1202346b4e8475f90c743cfb5cb174d",
            quantity: 0,
            price: 250,
            is_available: false,
            is_preorder: true,
            category_name: "Цветы",
            images: [],
            link: "/product/orchidea-a1202346b4e8475f90c743cfb5cb174d",
        },
        {
            product_id: 4,
            name: "Мангровое дерево",
            slug: "mangrove-0f99d6e431a24367b9c8f70a512ed657",
            quantity: 8,
            price: 300,
            is_available: true,
            is_preorder: false,
            category_name: "Экзотические растения",
            images: [],
            link: "/product/mangrove-0f99d6e431a24367b9c8f70a512ed657",
        },
        {
            product_id: 5,
            name: "Бонсай",
            slug: "bonsai-549c71b317f6450db9f6a714aa2d85ad",
            quantity: 2,
            price: 500,
            is_available: true,
            is_preorder: false,
            category_name: "Декоративные деревья",
            images: [],
            link: "/product/bonsai-549c71b317f6450db9f6a714aa2d85ad",
        },
    ],
};




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
        "link": "/catalog/vegetables_seeds",
        "subcategories": [
            {
                "name": "семена цветов",
                "link": "/catalog/flowers_seeds"
            },
            {
                "name": "семена уценка",
                "link": "/catalog/seeds_discount"
            }
        ]
    },
    {
        "name": "Розы",
        "link": "/catalog/roses",
        "subcategories": [
            {
                "name": "роза английская",
                "link": "/catalog/english_rose"
            },
            {
                "name": "семена уценка",
                "link": "/catalog/japanese_rose"
            },
            {
                "name": "канадская роза",
                "link": "/catalog/canadian_rose"
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

export const catalogPageItems = {
    "count": 6,
    "next": "http://localhost:8000/search/?limit=2&offset=4",
    "previous": "http://localhost:8000/search/?limit=2",
    "results": [
        {
            "product_id": 3,
            "name": "тюльпан красный",
            "slug": "tyulpan-krasnyij-fbd90b3801848b7b4cb04c882699e295",
            "quantity": 123,
            "price": 0,
            "is_available": false,
            "is_preorder": false,
            "category_name": "тюльпаны",
            "images": [],
            "link": "/product/tyulpan-krasnyij-fbd90b3801848b7b4cb04c882699e295"
        },
        {
            "product_id": 4,
            "name": "подсолнух",
            "slug": "podsolnuh-96dff206366a26741b4c04310499492e",
            "quantity": 12,
            "price": 50,
            "is_available": true,
            "is_preorder": false,
            "category_name": "растения Дейва",
            "images": [
                "/media/products/images/139f83d5eff8aaeefebc775a167a4012.webp"
            ],
            "link": "/product/podsolnuh-96dff206366a26741b4c04310499492e"
        }
    ]
}