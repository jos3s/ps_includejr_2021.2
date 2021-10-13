import * as Styled from "./styles";

export const Text = ({ children, isPurple = true, size }) => {
  return (
    <Styled.Container isPurple={isPurple} size={size}>
      {children}
    </Styled.Container>
  );
};
