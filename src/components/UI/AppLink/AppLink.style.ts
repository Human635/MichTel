import styled from "styled-components";

export const ThemeAppLink = styled.a`
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
  text-decoration: none;
  text-align: center;

  color: black;

  &:hover {
    background-color: royalblue;
    color: white;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;
