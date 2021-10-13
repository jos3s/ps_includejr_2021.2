import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 1rem;
  width: 651px;
  height: 80vh;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.01));
  padding: ${({ theme }) => theme.spacings.large};
  margin: 0 ${({ theme }) => theme.spacings.small} 0
    ${({ theme }) => theme.spacings.small};

  > h1 {
    display: flex;
    align-items: baseline;

    > p {
      margin-left: 1rem;
    }
  }
`;
