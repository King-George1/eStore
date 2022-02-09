import React, { useState } from "react";
import { ShopNow } from "./ShopNow";

export const NewArrival = () => {
  const [newArrives, setNewArrives] = useState([
    { src: "/asset/black-and-white-running-shoe_925x.jpg", price: 120, prodName: "mc fly" },
    { src: "/asset/pair-of-navy-blue-skate-shoes_925x.jpg", price: 100, prodName: "bearnest" },
    { src: "/asset/light-up-sneakers-women_925x.jpg", price: 150, prodName: "barked" },
  ]);
  return <div>
      <ShopNow products={newArrives} gap="10px" />
  </div>;
};
