import styled from "styled-components";

export const Divider = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.purple[1]};
  margin: ${({ theme }) => theme.spacings.small} 0;
`;
