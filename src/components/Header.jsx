import React, { useState, useEffect, useRef } from "react";

import { LoginModal } from "./LoginModal";
import { PopupCatalog } from "./PopupCatalog";
import { CartDropdown } from "./CartDropdown";
import { apiClient } from "../api/ApiHandler";

import { searchResults } from "../MockData";

export function Header({ toggleMobileMenu }) {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const cartButtonRef = useRef(null); // Ссылка на кнопку "Корзина"

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setAuthenticated(false);
        alert("Вы вышли из системы.");
    };

    const toggleCart = () => setCartOpen((prev) => !prev);
    const handleCartClose = () => setCartOpen(false);

    // Закрытие корзины при клике вне её области
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!cartButtonRef.current?.contains(event.target)) {
                setCartOpen(false);
            }
        };

        if (isCartOpen) {
            window.addEventListener("click", handleOutsideClick);
        } else {
            window.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [isCartOpen]);

    return (
        <header className="bg-green-500 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative gap-3">

                {/* Логотип */}
                <div className="text-xl font-bold">
                    <a href="/"><img loading="lazy" src="logo.svg" alt="Логотип" /></a>
                </div>

                {/* Центрируемый блок */}
                <div className="hidden lg:flex flex-1 items-center gap-4 justify-center relative">
                    <div className="relative">
                        <button
                            className="bg-green-600 px-4 py-2 rounded-lg"
                            onClick={() => setPopupOpen((prev) => !prev)}
                        >
                            Каталог
                        </button>
                        {isPopupOpen && (
                            <div className="absolute mt-2 top-full left-0 w-64 bg-white shadow-lg rounded-lg z-10">
                                <PopupCatalog onClose={() => setPopupOpen(false)} />
                            </div>
                        )}
                    </div>

                    <SearchBar />
                </div>

                <div className="hidden md:flex items-center gap-4">
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
                                onClick={() => setLoginModalOpen(true)}
                            >
                                Войти / Регистрация
                            </button>
                            <LoginModal
                                isOpen={isLoginModalOpen}
                                onClose={() => setLoginModalOpen(false)}
                            />
                        </>
                    )}

                    {/* Кнопка "Корзина" */}
                    <div className="relative">
                        <button
                            ref={cartButtonRef}
                            className="bg-green-600 px-4 py-2 rounded-lg"
                            onClick={toggleCart}
                        >
                            Корзина
                        </button>
                        <CartDropdown
                            isOpen={isCartOpen}
                            onClose={handleCartClose}
                            anchorRef={cartButtonRef}
                        />
                    </div>
                </div>

                {/* Кнопка для мобильного меню */}
                <div className="lg:hidden">
                    <button
                        className="bg-green-600 px-4 py-2 rounded-lg"
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};


function SearchBar() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [focused, setFocused] = useState(false);

    // Ссылки на элементы
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const getImageUrl = (imagePath) =>
        imagePath.startsWith("http") ? imagePath : `${API_BASE_URL}${imagePath}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            window.location.href = `/search?q=${query}`;
        }
    };

    const handleQuery = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim()) {
            fetchResults(value);
        } else {
            setResults([]);
        }
    };

    const fetchResults = async (searchQuery) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiClient.get(`/search`, {
                params: { search: searchQuery, format: "json" },
            });
            setResults(response.data.results || []);
        } catch (err) {
            setError("Ошибка при загрузке результатов");
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handleClickOutside = (event) => {
        if (
            inputRef.current && !inputRef.current.contains(event.target) &&
            resultsRef.current && !resultsRef.current.contains(event.target)
        ) {
            setFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex-1 gap-5 mx-3">
            <form
                className="relative"
                onSubmit={handleSubmit}
            >
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleQuery}
                    placeholder="Поиск"
                    className="w-full px-4 py-2 rounded-lg text-gray-800"
                    id="searchBar"
                    onFocus={() => setFocused(true)}
                />

                {focused && (
                    <div
                        ref={resultsRef}
                        className="absolute bg-white shadow-md text-black mt-3 px-8 py-2 left-0 right-0 rounded-lg z-50 max-h-96 overflow-y-auto"
                    >
                        {loading && <div className="text-gray-500">Загрузка...</div>}
                        {error && <div className="text-red-500">{error}</div>}
                        {!loading && !error && results.length === 0 && (
                            <div className="text-gray-500">Нет результатов</div>
                        )}
                        {!loading && !error && results.length > 0 && (
                            <div>
                                <div className="px-4 py-2">
                                    {results.map((item) => (
                                        <div key={item.product_id} className="mb-2">
                                            <a
                                                href={item.link}
                                                className="flex hover:bg-gray-100 p-2 rounded"
                                            >
                                                <div className="mr-4">
                                                    {item.images && item.images.length > 0 ? (
                                                        <img
                                                            src={getImageUrl(item.images[0])}
                                                            alt={item.name}
                                                            className="w-12 h-12 object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-gray-500">
                                                            Нет фото
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p className="text-gray-500">{item.price ? `${item.price} ₽` : "Цена не указана"}</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t pt-2 mt-2">
                                    <a
                                        href={`/search?q=${query}`}
                                        className="block text-black text-center border-2 border-green-500 py-2 rounded hover:border-green-700"
                                    >
                                        Смотреть все результаты
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
};
