import React, { useState, useEffect } from "react";
import axios from "axios";

import { getImageUrl } from "../utils/ImageUrl";
import { ProductCard } from "../components/ProductCard";


export function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            const { results, count, next, previous } = response.data;
            setProducts(results);
            setCount(count);
            setNextPage(next);
            setPreviousPage(previous);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts("http://localhost:8000/search/");
    }, []);

    const handlePageChange = (url) => {
        if (url) {
            fetchProducts(url);
        }
    };

    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            {/* Фильтры */}
            <div className="flex flex-wrap gap-2 mb-4">
                {/* Здесь можно добавить кнопки для фильтров, если нужно */}
            </div>

            {/* Сетка товаров */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard item={product}/>
                    ))}
                </div>
            )}

            {/* Пагинация */}
            <div className="mt-6 flex justify-center items-center">
                <button
                    onClick={() => handlePageChange(previousPage)}
                    className={`px-4 py-2 border rounded-l ${!previousPage ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                    disabled={!previousPage}
                >
                    Previous
                </button>

                <span className="px-4 py-2 border bg-gray-200">{`Page ${Math.ceil(count / 2)}`}</span>

                <button
                    onClick={() => handlePageChange(nextPage)}
                    className={`px-4 py-2 border rounded-r ${!nextPage ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                    disabled={!nextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
