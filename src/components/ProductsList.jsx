import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { ProductCard } from "./ProductCard";

import { popularProducts } from "../MockData";


export function ProductsList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(popularProducts);
    }, []);

    if (!data) {
        return <div>Загрузка...</div>;
    }

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="hidden lg:block absolute top-1/2 align-middle -translate-y-1/2 -right-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={onClick}
        >
            →
        </button>
    );

    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={onClick}
        >
            ←
        </button>
    );

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-xl mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-6">{data.title}</h2>
            <div
                className="relative group hover:bg-opacity-50 transition duration-300"
            >
                <Slider {...sliderSettings}>
                    {data.items.map((item, index) => (
                        <div key={index} className="px-2">
                            <ProductCard item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
