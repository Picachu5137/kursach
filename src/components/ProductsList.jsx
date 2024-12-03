import React, { useEffect, useState } from "react";
import { popularProducts } from "../MockData";

export function ProductsList() {
    const [data, setData] = useState(null);
    useEffect(() => {
        setData(popularProducts);
    }, []);

    if (!data) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">{data.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.items.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
                    >
                        <a href={item.url} className="block mb-4">
                            <div
                                className={`relative w-full h-40 bg-gray-200 ${
                                    item.is_available ? "" : "opacity-50"
                                }`}
                            >
                                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                    {item.is_available ? "В наличии" : "Скоро"}
                                </span>
                            </div>
                        </a>
                        <div className="flex flex-col gap-2">
                            <a href={item.url} className="text-lg font-semibold hover:underline">
                                {item.name}
                            </a>

                            {Object.entries(item.props).map(([prop, value], index) => (
                                <div className="inline">
                                    <p className="text-gray-400">{prop}:</p>
                                    <p>{value}</p>
                                </div>
                            ))}

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
                ))}
            </div>
        </div>
    );
}
