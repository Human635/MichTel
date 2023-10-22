import styled from "styled-components";

export const ThemeHeader = styled.header`
  margin: 0;
  background-color: #fff;
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
  background-color: #e6e6fa;
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
    color: hsl(249, 37%, 19%);
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
    line-height: 2.1;
    letter-spacing: -2px;
    margin-bottom: 30px;
  }

  .home-text {
    color: hsl(240, 9%, 51%);
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
  width: 300px;
  height: 400px;
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
      height: 60%;
      width: 100%;
      -webkit-background-size: 100%;
      -moz-background-size: 100%;
      -o-background-size: 100%;
      background-size: 100%;
    }
    .bottom {
      width: 200%;
      height: 20%;
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
      height: 80%;
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

export const ThemeMenuFavorites = styled.div`
  .navbar-btn-group {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .shopping-cart-btn {
    position: relative;
    background: hsl(220, 13%, 95%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
  }

  .shopping-cart-btn .count {
    background: hsl(45, 91%, 58%);
    position: absolute;
    top: -2px;
    right: -2px;
    height: 20px;
    min-width: 20px;
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
    height: calc(100vh - 91px);
    background: hsla(0, 0%, 100%, 0.9);
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
    color: var(--space-cadet);
    margin-bottom: 30px;
    font-weight: 600;
  }

  .cart-item {
    background: hsl(249, 37%, 19%);
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .cart-item .img-box {
    width: 60px;
    height: 60px;
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
    color: var(--space-cadet);
    font-size: var(--fs-5);
    font-weight: 600;
    width: calc(100% - 135px);
  }

  .cart-item .product-price {
    background: hsl(45, 91%, 58%);
    color: hsl(249, 37%, 19%);
    font-weight: 500;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-item .product-price .small {
    display: inline-block;
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }

  .cart-btn-group {
    background: #fff;
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
