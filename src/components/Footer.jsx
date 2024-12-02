import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Логотип</div>
          <p className="mt-2">Номер телефона</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Контакты</p>
          <p className="mt-2">Помощь покупателю</p>
          <p>Доставка</p>
          <p>О нас</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Категории</p>
          <p className="mt-2">Категория 1</p>
          <p>Категория 2</p>
          <p>Категория 3</p>
        </div>
      </div>
    </footer>
  );
}
