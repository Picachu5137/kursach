import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../api/ApiHandler";

import { getImageUrl } from "../utils/ImageUrl";

export function ProductPage() {
    const { product_slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [activeTab, setActiveTab] = useState("description");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await apiClient.get(`/product/${product_slug}`, {
                    params: { format: "json" },
                });
                setProduct(response.data);
                setCurrentImage(response.data.images?.[0] || null);
            } catch (err) {
                setError("Ошибка при загрузке данных продукта.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [product_slug]);

    const changeImage = (image) => {
        setCurrentImage(image);
    };

    const isAvailable = product?.is_available ? (
        <span className="text-green-600 font-semibold">В наличии</span>
    ) : (
        <span className="text-red-600 font-semibold">Временно отсутствует</span>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <div className="md:flex gap-8">
                        {/* Описание */}
                        <div className="mt-4 flex-1">
                            <h2 className="text-xl font-bold mb-2">Описание</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description ||
                                    "Описание товара отсутствует. Пожалуйста, уточните информацию у продавца."}
                            </p>
                        </div>
                        {/* Характеристики */}
                        <div className="mt-4 flex-1">
                            <h2 className="text-xl font-bold mb-2">Характеристики</h2>
                            <table className="w-full text-left table-auto border-collapse">
                                <tbody>
                                    {product.props && product.props.length > 0 ? (
                                        product.props.map((prop, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="py-2 px-4 font-semibold">{prop.key}</td>
                                                <td className="py-2 px-4">{prop.value}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="py-2 px-4 text-gray-500" colSpan={2}>
                                                Характеристики отсутствуют.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "delivery":
                return (
                    <p className="text-gray-700">
                        Информация о доставке и оплате временно отсутствует.
                    </p>
                );
            case "reviews":
                return <p className="text-gray-700">Отзывов пока нет.</p>;
            default:
                return null;
        }
    };

    if (loading) return <div className="text-center py-6">Загрузка...</div>;
    if (error) return <div className="text-center text-red-500 py-6">{error}</div>;
    if (!product) return <div className="text-center py-6">Продукт не найден</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-wrap lg:flex-nowrap gap-8">
                <div className="lg:w-1/2 w-full">
                    <img
                        src={getImageUrl(currentImage)}
                        alt={product.name}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                    <div className="flex gap-4 mt-4 overflow-x-auto">
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

                <div className="lg:w-1/2 w-full space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    {isAvailable}
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
                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold">
                                {product.price?.toLocaleString("ru-RU")} ₽
                            </span>
                        </div>
                        <button
                            className={`w-full py-2 rounded-lg ${
                                product.is_available
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : "bg-gray-400 text-white cursor-not-allowed"
                            }`}
                            disabled={!product.is_available}
                        >
                            {product.is_available ? "В корзину" : "Недоступно"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="border-b">
                    <ul className="flex">
                        {["description", "delivery", "reviews"].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 cursor-pointer ${
                                    activeTab === tab
                                        ? "border-b-2 border-green-500 font-semibold"
                                        : "text-gray-600"
                                }`}
                            >
                                {tab === "description" && "Описание"}
                                {tab === "delivery" && "Доставка и оплата"}
                                {tab === "reviews" && `Отзывы (${product.reviews?.length || 0})`}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4">{renderTabContent()}</div>
            </div>
        </div>
    );
};
