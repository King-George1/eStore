import React from "react";

export const ShopNow = (props) => {
  const gap = props.gap ? props.gap : "0px";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "33.3% 33.3% 33.3%",
        gap: gap,
      }}
    >
      {props.products.map((product, index) => (
        <div>
          <img src={product.src} alt="" width="100%" key={index} />
          
          <p
            className="productImage"
            style={{ paddingRight: product?.price ? "30px" : "3px" }}
          >
            {product?.price ? `$${product?.price}` : "SHOP NOW"}
          </p>
          {product.prodName && <p className="productName">
              {product.prodName.toUpperCase()}
            </p>}
        </div>
      ))}
    </div>
  );
};
