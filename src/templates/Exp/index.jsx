import Card, { CardTitle } from "../../components/Card";
import { Item, ItemText, List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";

export const Exp = () => {
  return (
    <Card>
      <CardTitle>experiências</CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            Monitor de Estrutura de Dados <p>2020</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Desenvolvedor Web na Startup TILAPIA <p>2021</p>
          </ItemText>
        </Item>
      </List>
      <Divider />
      <CardTitle>tecnologias</CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            HTML, CSS, Javascript <p>+2 anos</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            React <p>+5 meses</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Git, Github <p>+2 anos</p>
          </ItemText>
        </Item>
        <Text>e mais...</Text>
      </List>
    </Card>
  );
};
