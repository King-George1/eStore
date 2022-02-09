import React, { useState } from "react";
import { ShopNow } from "./ShopNow";

export const MenProducts = () => {
  const [menProducts, setMenProducts] = useState([
    { src: "/asset/modern-bamboo-wristwatch_925x.jpg", price: 250, prodName: "fleko" },
    { src: "/asset/wood-leather-watches_925x.jpg", price: 300, prodName: "bean" },
    { src: "/asset/unique-display-turquoise-watch_925x.jpg", price: 120, prodName: "feloi" },
  ]);
  return <div>
      <ShopNow products={menProducts} gap="10px"/>
  </div>;
};
