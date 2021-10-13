import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.green[1]};
  top: 0;
  right: 0;
  position: fixed;
  border-radius: 1rem 0 0 1rem;
  height: 100vh;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.div`
  > a {
    margin: 0 0.5rem;
  }
  .socialIcon {
    fill: ${({ theme }) => theme.colors.green[0]};
    transition: fill 0.5s ease-in-out;
    &:hover {
      fill: ${({ theme }) => theme.colors.purple[1]};
    }
  }
`;
