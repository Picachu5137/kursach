import React from "react";
import { getImageUrl } from "../utils/ImageUrl"; // Функция для обработки пути изображения


export function ProductCard({ item }) {
    const imageUrl = getImageUrl(item.images[0] || "/default-image.jpg");

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 min-h-[400px] flex flex-col justify-between">
            {/* Ссылка на страницу продукта */}
            <a href={item.link} className="block mb-4">
                {/* Контейнер изображения с фиксированной высотой */}
                <div className="relative w-full h-72">
                    {item.images && item.images.length > 0 ? (
                        <img
                            src={imageUrl}
                            alt={item.name}
                            className={`h-72 w-full object-cover rounded-xl ${item.is_available ? "" : "opacity-50"}`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "/default-image.jpg";
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded-xl text-gray-500 text-sm">
                            Нет изображения
                        </div>
                    )}

                    {/* Метка статуса */}
                    <span className={`absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded ${item.is_available ? "bg-blue-500" : "bg-gray-500"}`}>
                        {item.is_available ? "В наличии" : "Недоступен"}
                    </span>
                </div>
            </a>

            {/* Информация о продукте */}
            <div className="flex flex-col gap-2">
                <a href={item.link} className="text-lg font-semibold hover:underline">
                    {item.name}
                </a>

                {/* Категория */}
                {item.category_name && (
                    <p className="text-sm text-gray-500">{`Категория: ${item.category_name}`}</p>
                )}

                {/* Количество и возможность предзаказа */}
                <p className="text-sm text-gray-500">
                    {item.quantity > 0
                        ? `В наличии: ${item.quantity} шт.`
                        : "Нет в наличии"}
                </p>
                {item.is_preorder && (
                    <p className="text-sm text-yellow-500">Доступен для предзаказа</p>
                )}

                <p className="text-base font-semibold">
                    {item.price.toLocaleString("ru-RU")} ₽
                </p>

                <div className="mt-2">
                    {item.is_available ? (
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                            В корзину
                        </button>
                    ) : (
                        <button
                            className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
                            disabled
                        >
                            Недоступен
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

