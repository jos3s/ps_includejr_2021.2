import * as Styled from "./styles";

export const List = ({ children, uppercase }) => {
  return <Styled.Container uppercase={uppercase}>{children}</Styled.Container>;
};

export const Item = ({ children }) => {
  return (
    <>
      <Styled.Item>
        <Styled.Markup />
        {children}
      </Styled.Item>
    </>
  );
};

export const ItemText = ({ children }) => {
  return <Styled.Box>{children}</Styled.Box>;
};
