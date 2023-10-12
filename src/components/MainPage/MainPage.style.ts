import styled from "styled-components";

export const ThemeHeader = styled.header`
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 100;
padding: calc(1vw + 6.4px) calc(12vw - 35px); 
background-color: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(8px);
color: black;
box-shadow: 0 0 10px white;

display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;

&__logo {
  flex: 0 1 auto;

  a {
    &:is(:hover, :focus-visible) {
      outline: 0;

      #tehnikum-logo {
        fill: #a497f9;
        filter: drop-shadow(0 0 5px #a497f9);
        scale: 1.1;
      }
    }
  }
}

#tehnikum-logo {
  width: 190px;
  transition: 200ms;
}

input {
  padding-left: 63px;
}

@media (max-width: 1480px) {
    &__logo {
    flex: 0 1 250px;
    }

    #tehnikum-logo {
    width: 150px;
    }

}

.input-wrapper {
    flex: 1 1 auto;
    position: relative;

    input {
        width: 100%;
        max-width: 360px;

        &::placeholder {
        // color: ${(props) => props.theme.colors.placeholderColor};
        }
    }

    .icon {
        width: 18px;
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translateY(-50%);
        // fill: ${(props) => props.theme.colors.placeholderColor};
    }

    &:has(input:is(:hover, :focus)) {
        .icon {
        // fill: ${(props) => props.theme.colors.primeColor};
        }
    }
}

.profile-wrapper {
    flex: 0 1 auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    .icon-bell {
        padding: calc(0.8vw + 3.9px);
        box-sizing: content-box;

        flex: 0 0 23px;
        cursor: pointer;
        width: 23px;
        height: 23px;
        fill: ${(props) => props.theme.colors.gray};
        margin-right: calc(1.3vw + 5.8px);
        border: 1px solid transparent;
        border-radius: 10px;
        transition: 200ms;

        &:hover {
        fill: ${(props) => props.theme.colors.primeColor};
        border-color: ${(props) => props.theme.colors.lightGray};
        background-color: ${(props) => props.theme.colors.bgc};
        }

        &:active {
        transition: 100ms;
        fill: white;
        background-color: ${(props) => props.theme.colors.primeColor};
        }
    }

    img {
        cursor: pointer;
        margin-right: 15px;
        transition: 200ms;

        width: calc(0.8vw + 34px);
        height: calc(0.8vw + 34px);
        border-radius: 50%;
        object-fit: cover;

        &:hover {
        scale: 1.3;
        }

        &:active {
        scale: 0.9;
        transition: 100ms;
        }
    }

    .icon-arrow {
        padding: 20px;
        box-sizing: content-box;

        cursor: pointer;
        fill: ${(props) => props.theme.colors.gray};
        width: 12px;
        transition: 200ms;

        &:hover {
        scale: 1.4;
        }

        &._active {
        transform: rotate(-180deg);
        fill: ${(props) => props.theme.colors.primeColor};
        }
    }
}

`

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
`;
