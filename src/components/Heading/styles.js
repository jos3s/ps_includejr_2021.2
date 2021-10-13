import styled from "styled-components";

export const Container = styled.h1`
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  font-size: ${({ size, theme }) => theme.font.sizes[size]};
  color: ${({ theme, isPurple }) =>
    isPurple ? theme.colors.purple[1] : theme.colors.white};
`;
