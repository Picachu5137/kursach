import React, { useState, useEffect } from "react";
import { cartItems } from "../MockData";

export function CartDropdown({ isOpen, onClose, anchorRef }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(cartItems);
    }, []);

    const calculateTotal = () => {
        return data.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (!isOpen) {
        return null; // Если окно закрыто, ничего не рендерим
    }

    return (
        <div
            className="absolute bg-white shadow-lg rounded-lg p-4 w-80 z-50"
            style={{
                top: anchorRef.current?.offsetTop + anchorRef.current?.offsetHeight + 8 || 0, // Позиционируем под кнопкой
                left: anchorRef.current?.offsetLeft || 0,
            }}
        >
            <div className="flex justify-between items-center border-b pb-3">
                <h2 className="text-xl font-semibold">Корзина</h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>
            <div className="py-4">
                {data.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <li key={index} className="py-2 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        {item.quantity} x ${item.price}
                                    </p>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">Корзина пуста</p>
                )}
            </div>
            <div className="border-t pt-3 flex justify-between items-center">
                <p className="font-semibold">Итого:</p>
                <p className="font-semibold">${calculateTotal()}</p>
            </div>
            <div className="mt-4">
                <button
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    onClick={() => alert("Оформление заказа")}
                >
                    Перейти к оформлению
                </button>
            </div>
        </div>
    );
}
