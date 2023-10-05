import styled from "styled-components";

export const ThemeHeaderSettings = styled.div`
    background-color: lightgray;
    padding: 30px 50px;

    img{
        border-radius: 50%;
        border: 3px solid black;
        width: 120px;
        heigth: 120px;
    }
`

export const ThemeHeaderSocial = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
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
