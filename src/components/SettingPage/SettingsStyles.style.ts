import styled from "styled-components";

export const ThemeHeaderSettings = styled.div`
  background-color: #e6e6fa;
  padding: 30px 50px;
  border-radius: 20px;
`;

export const ThemeHeaderMain = styled.div`
  img {
    border-radius: 50%;
    border: 3px solid black;
    width: 120px;
    heigth: 120px;
  }

  position: relative;
  display: flex;
  gap: 55vw;
  border-bottom: 1px solid #755d9a;
  padding-bottom: 15px;

  h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 32px;
    margin: 0;
    margin-top: 45px;
  }

  span {
    font-weight: 600;
    color: #1e213d;
  }
`;

export const ThemeHeaderSocial = styled.div`
  align-items: center;
  width: 400px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  display:grid;
  grid-template-areas: "head head"
                        "menu1 menu2";
                        "menu3 menu4";



  .h2{
    grid-area: head;
    margin: 0;
  }

  .IconName1{
    margin: 0;
    grid-area: menu1;
    margin-right: 12px; 
    font-size: 17px;
    font-weight: 500;
    position: relative;
    top: -40px;
  }

  .IconName3{
    margin: 0; 
    grid-area: menu3;
    margin-right: 7px;
    font-size: 17px;
    font-weight: 500;
    position: relative;
    top: -40px;
  }

  .IconName2{   
    margin: 0;
    grid-area: menu2;
    margin-right: 5px; 
    font-size: 17px;
    font-weight: 500;
    position: relative;
    top: -40px;
  }
  
  .IconName4{
    margin: 0;
    grid-area: menu4;
    margin-right: 42px; 
    font-size: 17px;
    font-weight: 500;
    position: relative;
    top: -40px;
  }

  

  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
    top: -40px;
    
    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ThemeSettingAbout = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "social detail toogle"
                       "social detail toogle";
                       "button button button";
  
  .card-social{
    grid-area: social;
  }

  .dark-light{
    grid-area: toogle;
    margin: 0 auto;
    margin-top: 3px;
    
    h3{
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 25px;
      font-weight: 600;
      display: block;
      span{
        padding-top: 20px;
        font-size: 24px;
        font-weight: 550;
        display: block;
        border-bottom: 1px solid purple;
      }

    }

    i{
      display: flex;
      font-size: 40px;
      cursor: pointer;
      justify-content: center;
    }
  }

  .Bio{
    grid-area: detail;
  }

  .ReChange{
    grid-area: button;
    position : absolute;
    width: 100%;
    bottom: 0;
    margin: 0 auto;
  }
`;

export const ThemeForBtnStyle = styled.div`
  .goMain {
    position: absolute;
    top: 10px;
    right: 8px;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    color: white;
    padding: 0;
  }
`;

export const ThemeToogle = styled.div`
  div {
    position: absolute;
    right: 35px;
    top: 50px;
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      transform: rotate(360deg);
      background-color: #000;
      &:before {
        transform: translateX(45px);
        background-color: #fff;
      }
    }
  }

  label {
    margin: 0 auto;
    display: flex;
    width: 90px;
    height: 40px;
    border: 6px solid;
    border-radius: 50em;
    position: relative;
    top: -20px;
    transition: transform 0.75s ease-in-out;
    transform-origin: 50% 50%;
    cursor: pointer;

    &:before {
      transition: transform 0.75s ease;
      transition-delay: 0.5s;
      content: "";
      display: block;
      position: absolute;
      width: 35px;
      height: 35px;
      background-color: #000;
      border-radius: 50%;
      top: 3px;
      left: 5px;
    }
  }
`;
