import Card, { CardSubtitle, CardTitle } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Link } from "../../components/Link";
import { Item, ItemText, List } from "../../components/List";

export const Jogos = () => {
  return (
    <Card>
      <CardTitle>
        jogos <CardSubtitle> favoritos</CardSubtitle>
      </CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            Bioshock <p>Saga</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>Paladins</ItemText>
        </Item>
        <Item>
          <ItemText>Minecraft</ItemText>
        </Item>
        <Item>
          <ItemText>Prison Architect</ItemText>
        </Item>
        <Item>
          <ItemText>Cities Skylines</ItemText>
        </Item>
        <Item>
          <ItemText>Civilization VI</ItemText>
        </Item>
      </List>
      <Divider />
      <CardTitle>
        i-isso é tudo
        <CardSubtitle>
          <Link url="https://www.youtube.com/watch?v=qwmoZTljVN0" newTab>
            {" "}
            pe-pe-pe-pe..pessoal...
          </Link>
        </CardSubtitle>
      </CardTitle>
    </Card>
  );
};
