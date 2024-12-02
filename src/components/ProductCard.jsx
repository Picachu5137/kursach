import React from 'react';

export function ProductCard({ name, description, price }) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-52 bg-white shadow-md flex flex-col items-center">
            <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
                <p className="text-md font-bold text-gray-800 mt-4">{price} ₽</p>
            </div>
        </div>
    );
}
