import { styled } from "styled-components";

export const ThemeBio = styled.div`
    padding: calc(1vw + 11px);
    border-radius: 20px;
`;

export const ThemeBioData = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid var(--light-gray);
  margin-top: 40px;

  .data__item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
