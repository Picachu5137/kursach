import React, { useState } from "react";

export function PopupCatalog({ isOpen, onClose, catalogData }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0"
                onClick={onClose}
            ></div>

            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto relative z-10">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold">Каталог</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4">
                    {catalogData.map((category, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {category.name}
                            </h3>
                            <ul className="pl-4 list-disc">
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="text-gray-600 hover:underline">
                                        <a href={subcategory.link}>{subcategory.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
