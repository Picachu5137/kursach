import React, { useState, useEffect } from 'react';

import { AuthModal } from './LoginModal';


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        // Удаляем токен и обновляем состояние
        localStorage.removeItem("authToken");
        setAuthenticated(false);
        alert("Вы вышли из системы.");
    };


    return (
        <header className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="text-xl font-bold">Логотип</div>

            <nav className="hidden md:flex gap-4 items-center">
                <button className="bg-green-600 px-4 py-2 rounded-lg">Меню</button>
                <input
                    type="text"
                    placeholder="Поисковая строка"
                    className="px-4 py-2 rounded-lg text-gray-800"
                />
                {isAuthenticated ? (
                    <>
                        <button
                            className="bg-green-600 px-4 py-2 rounded-lg"
                            onClick={() => alert("Переход в личный кабинет")}
                        >
                            Личный кабинет
                        </button>
                        <button
                            className="bg-red-600 px-4 py-2 rounded-lg"
                            onClick={handleLogout}
                        >
                            Выйти
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="bg-green-600 px-4 py-2 rounded-lg"
                            onClick={() => setAuthModalOpen(true)}
                        >
                            Войти / Регистрация
                        </button>
                        <AuthModal
                            isOpen={isAuthModalOpen}
                            onClose={() => setAuthModalOpen(false)} // Закрытие модального окна
                        />

                    </>
                )}
                <button className="bg-green-600 px-4 py-2 rounded-lg">Корзина</button>
            </nav>
            <button
                className="md:hidden bg-green-600 px-4 py-2 rounded-lg"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-green-600 text-white flex flex-col items-start p-4 md:hidden z-50">
                    <button className="w-full text-left px-4 py-2 hover:bg-green-700">Меню</button>
                    <input
                        type="text"
                        placeholder="Поисковая строка"
                        className="w-full px-4 py-2 rounded-lg text-gray-800 mt-2"
                    />
                    <button className="w-full text-left px-4 py-2 hover:bg-green-700 mt-2">
                        Личный кабинет
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-green-700 mt-2">
                        Корзина
                    </button>
                </div>
            )}
        </header>
    );
}
