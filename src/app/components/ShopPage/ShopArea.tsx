import Image from "next/image";
import React from "react";

const ShopArea = () => {
  const products = [
    {
      img: "/assets/images/inner/shop-1.jpg",
      title: "Style Simple Grown",
      price: "$340.00",
      originalPrice: "$390.00",
      link: "shop-details.html",
    },
    {
      img: "/assets/images/inner/shop-2.jpg",
      title: "Wedding Shoes",
      price: "$340.00",
      originalPrice: "$390.00",
      link: "#",
    },
    {
      img: "/assets/images/inner/shop-3.jpg",
      title: "Bride’s Cake",
      price: "$340.00",
      originalPrice: "$390.00",
    },
    {
      img: "/assets/images/inner/shop-4.jpg",
      title: "Cake",
      price: "$340.00",
      originalPrice: "$390.00",
    },
    {
      img: "/assets/images/inner/shop-5.jpg",
      title: "Document",
      price: "$340.00",
      originalPrice: "$390.00",
    },
    {
      img: "/assets/images/inner/shop-1.jpg",
      title: "Flower",
      price: "$340.00",
      originalPrice: "$390.00",
    },
     {
      img: "/assets/images/inner/shop-7.jpg",
      title: "Food",
      price: "$340.00",
      originalPrice: "$390.00",
    },
    {
      img: "/assets/images/inner/shop-8.jpg",
      title: "Decor",
      price: "$340.00",
      originalPrice: "$390.00",
    },
    {
      img: "/assets/images/inner/shop-9.jpg",
      title: "Bed Design",
      price: "$340.00",
      originalPrice: "$390.00",
    },
  ];
  return (
    <div className="shop-area d-flex align-items-center">
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-shop">
                  <div className="shop-thumb">
                    <Image width={415} height={521} src={product.img} alt="image" />
                  </div>
                  <div className="shop-title">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="shop-price">
                    <h4>
                      <span>{product.originalPrice}</span>
                      {product.price}
                    </h4>
                  </div>
                  <div className="shop-button">
                    <a href="#">Learn More</a>
                  </div>
                  <div className="shoping-processing">
                    <div className="shoping-process">
                      <a href="#">
                        <i className="bi bi-heart-fill"></i>
                      </a>
                    </div>
                    <div className="add-to-cart">
                      <a href="#"> Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
