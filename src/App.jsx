import React from 'react';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductSection } from './components/ProductSection';

export function App() {
  const popularProducts = [
    { name: "Товар 1", description: "Описание товара 1", price: 1000 },
    { name: "Товар 2", description: "Описание товара 2", price: 2000 },
    { name: "Товар 3", description: "Описание товара 3", price: 1500 },
  ];

  const seasonalProducts = [
    { name: "Растение 1", description: "Описание растения 1", price: 500 },
    { name: "Растение 2", description: "Описание растения 2", price: 800 },
    { name: "Растение 3", description: "Описание растения 3", price: 700 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductSection title="Популярно у нас" products={popularProducts} />
        <ProductSection title="Растения сезона" products={seasonalProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
