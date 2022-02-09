import React, { useState } from "react";
import { ShopNow } from "./ShopNow";

export const AllProduct = () => {
  const [products, setProducts] = useState([
    { src: "/asset/DIY-beard-balm_925x.jpg" },
    { src: "/asset/green-t-shirt_925x.jpg" },
    { src: "/asset/anchor-bracelet-mens_925x.jpg" },
  ]);
  return (
    <div>
      <ShopNow products={products} />
    </div>
  );
};
