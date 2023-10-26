import React, { useEffect } from "react";
import { ThemeMenuFavorites } from "./MainPage.style";

export const MenuFavorites = () => {
  useEffect(() => {
    const cartToggleBtn = document.querySelector(".shopping-cart-btn");
    const navToggleBtn = document.querySelector(".menu-toggle-btn");
    const shoppingCart = document.querySelector(".cart-box");

    const navToggleFunc = () => {
      navToggleBtn?.classList.toggle("active");
    };

    const cartToggleFunc = () => {
      shoppingCart?.classList.toggle("active");
    };

    navToggleBtn?.addEventListener("click", navToggleFunc);

    cartToggleBtn?.addEventListener("click", cartToggleFunc);

    return () => {
      navToggleBtn?.removeEventListener("click", navToggleFunc);
      cartToggleBtn?.removeEventListener("click", cartToggleFunc);
    };
  }, []);

  return (
    <ThemeMenuFavorites>
      <div className="navbar-btn-group">
        <button className="shopping-cart-btn">
          <img
            src="https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/cart.svg"
            alt="shopping cart icon"
            width="18"
          />
          <span className="count">5</span>
        </button>
      </div>
      <div className="cart-box boxBackExchange">
        <ul className="cart-box-ul">
          <h4 className="cart-h4 mainTitles">Your favorites</h4>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src="https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/menu1.jpg"
                  alt="product image"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Saumon gravlax</h5>
              <p className="product-price">
                <span className="small">$</span>9
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src="https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/menu1.jpg"
                  alt="product image"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Chevrefried with honey</h5>
              <p className="product-price">
                <span className="small">$</span>14
              </p>
            </a>
          </li>

          <li>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img
                  src="https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/menu1.jpg"
                  alt="product image"
                  className="product-img"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>

              <h5 className="product-name">Crispy fish</h5>
              <p className="product-price">
                <span className="small">$</span>4
              </p>
            </a>
          </li>
        </ul>

        <div className="cart-btn-group boxBackExchange">
          <button className="btn btn-secondary">View order</button>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </ThemeMenuFavorites>
  );
};

//https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/menu1.jpg
//https://codewithsadee.github.io/foodhub-restaurant-website/assets/images/cart.svg
