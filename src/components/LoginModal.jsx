import React, { useState } from "react";
import { Modal } from "./Modal";

export function LoginModal({ isOpen, onClose }) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Авторизация с данными:", { phone, password });
        alert("Авторизация успешна!");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-2xl text-gray-600 font-semibold mb-4">Вход или регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Номер телефона*</label>
                    <input
                        type="text"
                        placeholder="Введите номер телефона"
                        className="w-full px-4 py-2 border text-gray-500 rounded-md"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Пароль</label>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        className="w-full px-4 py-2 border text-gray-500 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md"
                >
                    Войти
                </button>
            </form>
        </Modal>
    );
}
