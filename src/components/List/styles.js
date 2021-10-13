import styled from "styled-components";

export const Container = styled.ul`
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  padding: 0;
`;

export const Item = styled.li`
  margin: 1.2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Markup = styled.div`
  width: 1em;
  height: 1em;
  background-color: ${({ theme }) => theme.colors.green[1]};
  margin-right: 1em;
  border-radius: 1rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
