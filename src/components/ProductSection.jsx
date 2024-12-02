import React from 'react';
import { ProductCard } from './ProductCard';

export function ProductSection({ title, products }) {
  return (
    <section className="my-8 p-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{title}</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">Нет продуктов</p>
        )}
      </div>
    </section>
  );
}
