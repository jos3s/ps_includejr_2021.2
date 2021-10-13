import styled from "styled-components";

export const Container = styled.p`
  font-size: ${({ size, theme }) => theme.font.sizes[size]};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  line-height: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme, isPurple }) =>
    isPurple ? theme.colors.purple[1] : theme.colors.white};
  margin-right: 0.5rem;
`;
