import React from "react";

function Products() {
  const productList = [
    { name: "Z Flip Mobile", price: "$120", img: "images/img2.jpeg" },
    { name: "Air Pods Pro", price: "$60", img: "images/img1.jpeg" },
    { name: "iPhone", price: "$50000", img: "images/img5.jpg" },
    { name: "Headphones", price: "$60", img: "images/img6.jpg" }
  ];

  return (
    <div className="Products-grid">
      {productList.map((product, index) => (
        <div className="Product" key={index}>
          <img src={product.img} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;