import { Item, ItemText, List } from "../../components/List";
import Card, { CardSubtitle, CardTitle } from "../../components/Card";

export const Livros = () => {
  return (
    <Card>
      <CardTitle>
        livros <CardSubtitle> favoritos</CardSubtitle>
      </CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            Harry Potter <p>7 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Percy Jackson <p>5 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Jogos Vorazes <p>3 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            As Crônicas dos Kane <p>3 Livros</p>
          </ItemText>
        </Item>
        <Item item={"Magisterium"} complement={"+4 Livros"}>
          <ItemText>
            Magisterium <p>+4 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Magnus Chase <p>3 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Trilogia Silo <p>3 Livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            As Crônicas de Nárnia <p>Vol. Único</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Heróis do Olimpo <p>5 livros</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Código da Vince<p>Saga</p>
          </ItemText>
        </Item>
      </List>
    </Card>
  );
};
