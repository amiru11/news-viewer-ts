import styled from "styled-components";

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Category = styled.div<{ active: boolean }>`
  font-size: 1.2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #ff9999;
  }

  ${props =>
    props.active &&
    `
      font-weight: 600;
      border-bottom: 2px solid #ff8181;
      color: #ff8181;
      &:hover {
        color: #ff9999;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;
