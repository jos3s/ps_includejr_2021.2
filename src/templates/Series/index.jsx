import Card, { CardSubtitle, CardTitle } from "../../components/Card";
import { Item, ItemText, List } from "../../components/List";

export const Series = () => {
  return (
    <Card>
      <CardTitle>
        séries <CardSubtitle> favoritas</CardSubtitle>
      </CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            Star Trek Discover <p>+3 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Star Trek Lower Decks <p>2 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Doctor Who (2005) <p>12 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Brooklyn Nine Nine <p>8 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            3% <p>4 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            The Good Place" <p>4 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Black Mirror <p>5 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Star Trek: The Next Generation <p>7 temporadas</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Os Simpsons <p>+27 temporadaso</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Dear White People <p>4 temporadas</p>
          </ItemText>
        </Item>
      </List>
    </Card>
  );
};
