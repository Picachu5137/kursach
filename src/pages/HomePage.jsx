import React from "react";

import { ProductsList } from "../components/ProductsList";

export function HomePage () {

    return (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            <ProductsList  />
          </div>
        </div>
      );
};