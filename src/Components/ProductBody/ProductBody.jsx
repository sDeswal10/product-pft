import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { itemsList } from "../../Data/ItemsList";
import Search from "../Search/Search";

const ProductBody = () => {
  
  return (
    <div>
      <Search />
      <div className="flex flex-row items-center justify-between flex-wrap gap-10">
        {itemsList?.map((product, i) => (
          <ProductCard
            title={product.name}
            totalProducts={product.items.length}
            image={product.image}
            id={product.id}
            action={() => {}}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBody;
