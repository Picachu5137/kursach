import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../api/ApiHandler";

export function ProductPage() {
    const { product_slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await apiClient.get(`/product/${product_slug}`, {
                    params: { format: "json" },
                });
                setProduct(response.data);
                setCurrentImage(response.data.images[0]);
            } catch (err) {
                setError("Ошибка при загрузке данных продукта.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [product_slug]);

    const getImageUrl = (imagePath) =>
        imagePath.startsWith("http") ? imagePath : `${API_BASE_URL}${imagePath}`;

    const changeImage = (image) => {
        setCurrentImage(image);
    };

    const is_available = () => {
        if (product.is_available) {
            return (
                <span>
                    
                </span>
            );
        }
    }

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Продукт не найден</div>;

    return (
        <div className="container mx-auto p-6">
            {/* Заголовок и главная секция */}
            <div className="flex gap-8">
                {/* Левая колонка: изображение и превью */}
                <div className="w-1/2">
                    <img
                        src={getImageUrl(currentImage)}
                        alt={product.name}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                    {/* Галерея превью */}
                    <div className="flex gap-4 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={getImageUrl(img)}
                                alt={`Preview ${index}`}
                                onClick={() => changeImage(img)}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border 
                                    ${
                                        currentImage === img
                                            ? "border-2 border-green-500"
                                            : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Правая колонка: информация о товаре */}
                <div className="w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <span className="text-green-600 font-semibold">In stock</span>

                    {/* Детали */}
                    <ul className="text-gray-700 space-y-2">
                        <li>
                            <strong>Артикул:</strong> {product.article || "—"}
                        </li>
                        <li>
                            <strong>Срок отправки:</strong> {product.delivery_date || "—"}
                        </li>
                        <li>
                            <strong>Возраст саженца:</strong> {product.age || "—"}
                        </li>
                        <li>
                            <strong>Стандарт поставки:</strong> Горшок P9 (0.5 л)
                        </li>
                        <li>
                            <strong>Латинское название:</strong>{" "}
                            <i>{product.latin_name || "—"}</i>
                        </li>
                    </ul>

                    {/* Цена и кнопка */}
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-1/2">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold">{product.price} ₽</span>
                        </div>
                        <button className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 transition">
                            В корзину
                        </button>
                    </div>
                </div>
            </div>

            {/* Описание и характеристики */}
            <div className="mt-10">
                <div className="border-b">
                    <ul className="flex">
                        <li className="px-4 py-2 border-b-2 border-green-500 font-semibold">
                            Описание
                        </li>
                        <li className="px-4 py-2 text-gray-600 cursor-pointer">
                            Доставка и оплата
                        </li>
                        <li className="px-4 py-2 text-gray-600 cursor-pointer">
                            Reviews 0
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Описание</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {product.description ||
                            "Описание товара отсутствует. Пожалуйста, уточните информацию у продавца."}
                    </p>
                </div>

                {/* Характеристики */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Характеристики</h2>
                    <table className="w-full text-left table-auto border-collapse">
                        <tbody>
                            {product.props.map((prop, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2 px-4 font-semibold">{prop.key}</td>
                                    <td className="py-2 px-4">{prop.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
