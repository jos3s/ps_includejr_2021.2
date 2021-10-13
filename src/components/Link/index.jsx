import styled from "styled-components";

const Container = styled.a`
  text-decoration: ${({ theme, dotted }) =>
    dotted ? "underline dotted" + theme.colors.purple[1] : "none"};
  color: ${({ theme }) => theme.colors.purple[1]};
  cursor: pointer;
`;

export const Link = ({ children, url, newTab = false, dotted = true }) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Container href={url} target={target} dotted={dotted}>
      {children}
    </Container>
  );
};
