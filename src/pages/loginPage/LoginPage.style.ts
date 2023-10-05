import styled from "styled-components";

export const ThemeLogin = styled.div`
  color: black;
  position: relative;
  border: 3px solid black;
  width: 650px;
  heigth: 350px;
  margin: 0 auto;
  align-items: center;

  img {
    width: 100%;
    height: 100%
    z-index: -1;
  }
`;

export const ThemeFormLogin = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: white;
  border-left: 2px solid black;

  h1 {
    display: block;
    font-size: 40px;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 10%;
    margin-top: 10%;
    width: 50%;
  }

  input {
    display: block;
    margin-bottom: 80px;
    margin-left: 25%;
    margin-right: 25%;
    width: 50%;

    position: relative;
    z-index: 3;
    background: none;
    border: none;
    padding: 5px ;
    font-size: 20px;
    @include transition(0.3s);
    border-bottom: 2px solid #777;
    color: #555;
    &:invalid {
      outline: none;
    }

    &:focus,
    &:valid {
      outline: none;

      @include box-shadow(0 1px $royalblue);
      border-color: $royalblue;

    }
  }

  input:is(:hover, :focus) {
    border-bottom: 2px solid royalblue;
  }

  button {
    display: block;
    margin-left: 25%;
    margin-right: 25%;
    width: 50%;

    cursor: pointer;
    padding: 10px 15px;
    border-radius: 12px;
    background-color: rgba(107, 169, 187, 0.5);
    transition: 200ms;
    border: none;
  
    color: black;
  }

  button:hover {
    background-color: royalblue;
    color: white;
    transform: scale(1.05);
  }
  
  button:active {
    transform: scale(0.9);
  }
`;
