import styled from "styled-components";

export const ThemeHeader = styled.header`
  margin: 0;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 15vw;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 10000;

  .logo {
    h1 {
      margin: 0;
    }
    margin: 0;
    display: flex;
    margin-left: 30px;
    align-items: center;
    font-size: 30px;
  }
`;

export const ThemeToogleMain = styled.div`
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      transform: rotate(360deg);
      background-color: #000;
      &:before {
        transform: translateX(27px);
        background-color: #fff;
      }
    }
  }

  label {
    margin: 0 auto;
    display: flex;
    width: 50px;
    height: 25px;
    border: 6px solid;
    border-radius: 50em;
    position: relative;
    top: -10px;
    left: -100px;
    transition: transform 0.75s ease-in-out;
    transform-origin: 50% 50%;
    cursor: pointer;

    &:before {
      transition: transform 0.75s ease;
      transition-delay: 0.5s;
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #000;
      border-radius: 50%;
      top: 2.5px;
      left: 3px;
    }
  }
`;

export const ThemeHomeSection = styled.section`
  padding: 70px 60px;
  border-radius: 12px;
  height: 100%;

  .Paris {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 110px;
    left: -150px;
    animation: scaleUp 3s ease-in-out infinite;
  }

  .Venetsya {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 0;
    right: -20px;
    animation: scaleUp 2s ease-in-out infinite;
  }

  .London {
    position: absolute;
    width: 25vw;
    border-radius: 20px;
    border: 3px solid #9aceeb;

    top: 300px;
    right: -20px;
    animation: scaleUp 4s ease-in-out infinite;
  }

  .shape {
    position: absolute;
    filter: drop-shadow(0px 3px 6px hsla(0, 0%, 0%, 0.1));
  }

  .shape-1 {
    top: 420px;
    right: 350px;
    animation: scaleUp 2s 3s ease-in-out infinite;
  }

  .shape-2 {
    right: 0;
    top: 160px;
    animation: scaleUp 3s 4s ease-in-out infinite;
  }

  .shape-3 {
    top: 330px;
    right: 450px;
    animation: scaleUp 3s 1s ease-in-out infinite;
  }

  .shape-4 {
    top: 15px;
    right: 350px;
    animation: moveUp 3s 1s ease-in-out infinite;
  }

  .shape-5 {
    top: 80px;
    right: 470px;
    animation: moveUp 3s ease-in-out infinite;
  }

  @keyframes scaleUp {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }

    50% {
      transform: translateY(-5px) scale(1.05);
    }
  }

  @keyframes moveUp {
    0%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  display: grid;
  grid-template-areas:
    "main menu"
    "main menu";

  . home-left {
    grid-area: main;
  }

  .home-right {
    grid-area: menu;
    position: relative;
  }

  .home-left {
    text-align: start;
  }

  .home-subtext {
    background: hsl(220, 13%, 95%);
    color: hsl(249, 37%, 19%);
    font-size: 18px;
    display: inline-block;
    padding: 3px;
    margin-bottom: 30px;
  }

  .main-heading {
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
    line-height: 2.1;
    letter-spacing: -2px;
    margin-bottom: 30px;
  }

  .home-text {
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .btn-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 130px;
    position: relative;
    left: -175px;
    margin-bottom: 20px;
  }
  margin-bottom: 100px;
`;

export const ThemeCard = styled.div`
  width: 320px;
  height: 300px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .container {
    width: 100%;
    height: 100%;
    .top {
      height: 65%;
      width: 100%;
      -webkit-background-size: 100%;
      -moz-background-size: 100%;
      -o-background-size: 100%;
      background-size: 100%;
    }
    .bottom {
      width: 200%;
      height: 35%;
      transition: transform 0.5s;
      &.clicked {
        transform: translateX(-50%);
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      p {
        margin: 0;
        padding: 0;
      }
      .left {
        height: 100%;
        width: 50%;
        background: #f4f4f4;
        position: relative;
        float: left;
        .details {
          padding: 20px;
          float: left;
          width: calc(70% - 40px);
        }
        .buy {
          float: right;
          width: calc(30% - 2px);
          height: 100%;
          background: #f1f1f1;
          transition: background 0.5s;
          border-left: solid thin rgba(0, 0, 0, 0.1);
          svg {
            font-size: 30px;
            padding: 30px;
            color: #254053;
            transition: transform 0.5s;
          }
          &:hover {
            background: #a6cdde;
          }
          &:hover svg {
            transform: translateY(5px);
            color: #00394b;
          }
        }
      }
      .right {
        width: 50%;
        background: #a6cdde;
        color: white;
        float: right;
        height: 200%;
        overflow: hidden;
        .details {
          padding: 20px;
          float: right;
          width: calc(70% - 40px);
        }
        .done {
          width: calc(30% - 2px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          i {
            font-size: 30px;
            padding: 30px;
            color: white;
          }
        }
        .remove {
          width: calc(30% - 1px);
          clear: both;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          background: #bc3b59;
          transition: transform 0.5s, background 0.5s;
          &:hover {
            background: #9b2847;
          }
          &:hover i {
            transform: translateY(5px);
          }
          i {
            transition: transform 0.5s;
            font-size: 30px;
            padding: 30px;
            color: white;
          }
        }
        &:hover {
          .remove,
          .done {
            transform: translateY(-100%);
          }
        }
      }
    }
  }

  .inside {
    z-index: 9;
    background: #92879b;
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    .icon {
      position: absolute;
      right: 85px;
      top: 85px;
      color: white;
      opacity: 1;
    }
    &:hover {
      width: 100%;
      right: 0;
      top: 0;
      border-radius: 0;
      height: 65%;
      .icon {
        opacity: 0;
        right: 15px;
        top: 15px;
      }
      .contents {
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);
      }
    }
    .contents {
      padding: 5%;
      opacity: 0;
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      table {
        text-align: left;
        width: 100%;
      }
      h1,
      p,
      table {
        color: white;
      }
      p {
        font-size: 13px;
      }
    }
  }
`;

export const ThemeMainSection = styled.section`
  .place-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  h2 {
    margin: 0;
    margin-top: -50px;
    margin-left: 50px;
    font-size: 40px;
  }
  p {
    margin-left: 52px;
    font-size: 20px;
  }
`;

export const ThemeFooter = styled.footer`
  background-color: #222;
  color: white;
  position: absolute;
  left: 0;
  margin: 0;
  width: 100%;
  height: 20vw;

  .logo {
    h1 {
      margin: 0;
    }
    margin: 0;
    display: flex;
    margin-left: 30px;
    align-items: center;
    font-size: 30px;
  }
`;

export const ThemeRightSide = styled.div`
  position: absolute;
  right: 40px;
  top: 15px;
  display: flex;
  align-items: center;
  gap: -80px;
`;

export const ThemeRightFavorite = styled.div`
  position: absolute;
  top: 30px;
  right: 15px;
  background-color: gray;
  border-radius: 10px;
  opacity: 0.9;
`;
export const ThemeDivForOneStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 30px;
`;

//TODO: Исправить стиль на SVG и подключить к THEmeexchange
export const ThemeMenuFavorites = styled.div`
  position: absolute;
  right: 0px;
  top: 3px;
  font-family: "Rubik", sans-serif;

  li {
    list-style: none;
  }

  a {
    font: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  img,
  svg,
  ion-icon,
  span,
  button {
    display: block;
  }

  .navbar-btn-group {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .shopping-cart-btn {
    position: relative;
    background-color: #999;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
  }

  .shopping-cart-btn .count {
    background: hsl(45, 91%, 58%);
    position: absolute;
    top: 2px;
    right: -2px;
    height: 20px;
    min-width: 2px;
    display: flex;
    align-items: center;
    padding: 0 7px;
    border-radius: 20px;
    color: hsl(249, 37%, 19%);
    font-size: 12px;
    font-weight: 500;
  }

  .menu-toggle-btn {
    display: flex;
    flex-direction: column;
    width: 20px;
    gap: 5px;
  }

  .menu-toggle-btn .line {
    background: hsl(249, 37%, 19%);
    width: 20px;
    height: 2px;
    border-radius: 2px;
    transition: 0.25s ease;
  }

  .menu-toggle-btn.active .one {
    transform: translateY(7px) rotate(-45deg);
  }

  .menu-toggle-btn.active .two {
    transform: rotate(45deg);
  }

  .menu-toggle-btn.active .three {
    transform: translateY(-7px) rotate(-45deg);
  }

  .cart-box {
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 400px;
    width: 100%;
    height: calc(100vh - 95px);
    box-shadow: -1px 1px 3px 0 hsla(0, 0%, 0%, 0.05);
    backdrop-filter: blur(10px);
    transform: translateX(100%);
    visibility: hidden;
    z-index: 10;
    transition: 0.5s ease-in-out;
  }

  .cart-box.active {
    transform: translateX(0);
    visibility: visible;
  }

  .cart-box-ul {
    height: 100%;
    padding: 30px;
    padding-bottom: 120px;
    overflow-y: auto;
  }

  .cart-box-ul::-webkit-scrollbar {
    display: none;
  }

  .cart-h4 {
    margin-bottom: 30px;
    font-weight: 600;
  }

  .cart-item {
    background: hsl(220, 13%, 95%);
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .cart-item .img-box {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    overflow: hidden;
  }

  .cart-item .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.75s ease;
  }

  .cart-item:hover .product-img {
    transform: scale(1.05);
  }

  .cart-item .product-name {
    color: hsl(249, 37%, 19%);
    font-size: 14px;
    font-weight: 600;
    width: calc(100% - 135px);
  }

  .cart-item .product-price {
    background: hsl(45, 91%, 58%);
    color: hsl(249, 37%, 19%);
    font-weight: 500;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .cart-item .product-price .small {
    display: inline-block;
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }

  .cart-btn-group {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 30px;
    border-top: 1px solid hsla(0, 0%, 0%, 0.1);
    z-index: 15;
  }

  .cart-btn-group {
    padding: 30px 60px;
  }

  .btn {
    height: 55px;
    padding: 0 25px;
    color: hsl(249, 37%, 19%);
    font-size: 14px;
    font-weight: 500;
    transition: 0.75s ease;
  }

  .btn:hover {
    filter: saturate(1.05) brightness(1.05);
  }

  .btn-primary {
    background: hsl(45, 91%, 58%);
  }

  .btn-secondary {
    background: hsl(220, 13%, 95%);
  }
`;

export const ThemeLightDark = styled.div`
  position: absolute;
  right: 80px;
  display: flex;
  align-items: center;
  margin-top: 60px;

  button {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: gray;
    transition: 200ms;
    border: none;

    &:first-of-type {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    &:last-of-type {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    &:hover {
      background-color: royalblue;
      color: white;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const ThemeModalItem = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
  body {
    background: #eef3f9;
    padding: 22px;
    font-family: "Poppins";
  }
  .card {
    border-radius: 18px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    box-shadow: 8px 0px 20px #d1d1d1;
  }
  .hset {
    width: 140px;
    margin: 46px 25px 0px 50px;
  }
  .hset:hover {
    animation: jello-diagonal 0.9s linear both;
    cursor: pointer;
  }
  @keyframes jello-diagonal {
    0% {
      transform: skew(0deg 0deg);
    }
    30% {
      transform: skew(25deg 25deg);
    }
    40% {
      transform: skew(-15deg, -15deg);
    }
    50% {
      transform: skew(15deg, 15deg);
    }
    65% {
      transform: skew(-5deg, -5deg);
    }
    75% {
      transform: skew(5deg, 5deg);
    }
    100% {
      transform: skew(0deg 0deg);
    }
  }
  .zoom-txt {
    font-size: 10px;
    color: #b1b1b1;
    margin-left: 66px;
  }
  .sp-label {
    background: #121212;
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    width: fit-content;
    padding: 4px 7px;
    border-radius: 99px;
    margin-top: -138px;
    margin-left: 220px;
  }
  .sp-label:hover {
    animation: shake-horizontal 1.1s linear both;
    cursor: pointer;
  }

  /* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */
  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    margin-left: 220px;
    margin-right: 156px;
  }
  .old-price {
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 220px;
    margin-top: 24px;
  }
  .new-price {
    font-weight: 600;
    font-size: 38px;
    margin-left: 220px;
    margin-top: -20px;
  }
  .new-price:hover {
    animation: shake-horizontal 0.8s linear both;
    cursor: pointer;
  }
  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }
  .offer-info {
    color: #86878c;
    font-size: 12px;
    margin-left: 220px;
    margin-top: -44px;
    margin-bottom: 16px;
  }
  .buy-btn {
    margin-left: 220px;
    margin-top: 20px;
    background: #4787e9;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding: 12px 140px;
    border-radius: 5px;
    box-shadow: 0px 5px 0px #1e56f1;
    transition: 0.3s ease;
    border: none;
    font-family: "Poppins";
  }
  .buy-btn:hover {
    background: #3c7ad8;
    box-shadow: 0px 3px 0px #1e56f1;
    cursor: pointer;
    transform: scale(0.95);
  }
  .buy-btn:active {
    transform: scale(0.9);
  }
  .green-dot {
    background: #00d889;
    width: 16px;
    height: 16px;
    border-radius: 99px;
    margin-left: 220px;
    margin-top: 22px;
  }
  .stock-pcs {
    margin-left: 242px;
    font-size: 12px;
    margin-top: -16px;
  }
  .add-to-cart-btn {
    transition: 0.3s ease;
    margin-left: 220px;
    margin-top: 12px;
    padding: 8px 24px 18px 24px;
    background: #fff;
    border: 1px solid #c1c1c1;
    border-radius: 6px;
    font-family: "Poppins";
    font-size: 12px;
  }
  .add-to-cart-btn svg {
    position: relative;
    top: 7px;
    right: 6px;
  }
  .add-to-wl-btn {
    transition: 0.3s ease;
    margin-left: 20px;
    padding: 8px 24px 18px 24px;
    background: #fff;
    border: 1px solid #c1c1c1;
    border-radius: 6px;
    font-family: "Poppins";
    font-size: 12px;
    margin-bottom: 62px;
  }
  .add-to-wl-btn svg {
    position: relative;
    top: 7px;
    right: 6px;
  }
  .add-to-cart-btn:hover,
  .add-to-wl-btn:hover {
    cursor: pointer;
    background: #4787e9;
    color: #fff;
    transform: scale(0.95);
  }
  .add-to-cart-btn:active,
  .add-to-wl-btn:active {
    transform: scale(0.92);
  }

  .preview-container {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 94%;
    height: 94%;
    background: #000000d6;
    z-index: 9;
    padding: 32px;
  }
  .close-prev-btn {
    float: right;
    color: #121212;
    background: #fff;
    padding: 12px 12px 6px;
    margin-right: 32px;
    margin-top: 32px;
    border-radius: 99px;
    transition: 0.3s ease;
  }
  .close-prev-btn:hover {
    cursor: pointer;
    transform: scale(0.8);
  }
  #prev-img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 60%;
    border-radius: 22px;
  }
  button {
    margin-bottom: 50 px;
  }
`;
