import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export const Category = styled(NavLink)`
  font-size: 1.2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #ff9999;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ff8181;
    color: #ff8181;
    &:hover {
      color: #ff9999;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
