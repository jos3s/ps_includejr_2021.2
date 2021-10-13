import React from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import * as Styled from "./styles";

export default React.forwardRef(({ children }, ref) => {
  return <Styled.Container ref={ref}>{children}</Styled.Container>;
});

export const CardTitle = ({ children }) => {
  return (
    <Heading isPurple={true} size="huge">
      {children}
    </Heading>
  );
};

export const CardSubtitle = ({ children }) => {
  return (
    <Text isPurple size="small">
      {" "}
      {children}
    </Text>
  );
};
