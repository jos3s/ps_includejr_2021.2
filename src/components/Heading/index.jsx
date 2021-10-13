import * as Styled from "./styles";

export const Heading = ({
  children,
  as = "h1",
  uppercase = false,
  isPurple = false,
  size = "medium",
}) => {
  return (
    <Styled.Container
      as={as}
      uppercase={uppercase}
      isPurple={isPurple}
      size={size}
    >
      {children}
    </Styled.Container>
  );
};
