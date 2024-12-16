import React, { useEffect, useState, useRef } from "react";
import { menuItems } from "../MockData";

export function PopupCatalog({ onClose }) {
    const [data, setData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const catalogRef = useRef(null);

    useEffect(() => {
        setData(menuItems);

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const handleClickOutside = (event) => {
            if (catalogRef.current && !catalogRef.current.contains(event.target)) {
                onClose();
            }
        };

        // Добавляем обработчики событий
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Убираем обработчики событий
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleMouseEnterCategory = (index) => {
        setActiveCategory(index);
    };

    const handleMouseLeaveCategory = () => {
        setActiveCategory(null);
    };

    return (
        <div
            ref={catalogRef}
            className="relative p-2 bg-white text-gray-600 rounded-xl shadow-lg max-w-xs"
        >
            {/* Основной список категорий */}
            <ul className="divide-y divide-gray-200">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="py-2 px-4 relative"
                        onMouseEnter={() => handleMouseEnterCategory(index)}
                    >
                        <div className="font-bold hover:underline cursor-pointer flex justify-between items-center">
                            <a href={item.link} onClick={onClose}>
                                {item.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Окно с подкатегориями */}
            {activeCategory !== null && data[activeCategory]?.subcategories && (
                <div
                    className="absolute left-3/4 top-0 mt-0 ml-2 bg-white shadow-lg rounded-lg p-2 w-48"
                    onMouseEnter={() => setActiveCategory(activeCategory)}
                    onMouseLeave={handleMouseLeaveCategory}
                >
                    <ul className="divide-y divide-gray-200">
                        {data[activeCategory].subcategories.map((subcategory, subIndex) => (
                            <li
                                key={subIndex}
                                className="py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                <a
                                    href={subcategory.link}
                                    className="text-md text-gray-600 hover:underline"
                                    onClick={onClose}
                                >
                                    {subcategory.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
