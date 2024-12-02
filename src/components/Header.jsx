import React from 'react';

export function Header() {
  return (
    <header className="bg-green-500 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">Логотип</div>
      <nav className="flex gap-4 items-center">
        <button className="bg-green-600 px-4 py-2 rounded-lg">Меню</button>
        <input
          type="text"
          placeholder="Поисковая строка"
          className="px-4 py-2 rounded-lg text-gray-800"
        />
        <button className="bg-green-600 px-4 py-2 rounded-lg">Личный кабинет</button>
        <button className="bg-green-600 px-4 py-2 rounded-lg">Корзина</button>
      </nav>
    </header>
  );
}
