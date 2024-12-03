import React from "react";

import { ProductSection } from '../components/ProductSection';
import { ProductsList } from "../components/ProductsList";

export function HomePage () {

    return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            <ProductsList  />
            {/* <ProductSection title="Растения сезона" products={seasonalProducts} /> */}
          </div>
        </div>
      );
};