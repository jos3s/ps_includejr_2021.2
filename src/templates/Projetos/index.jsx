import Card, { CardSubtitle, CardTitle } from "../../components/Card";
import { Link } from "../../components/Link";
import { Item, ItemText, List } from "../../components/List";

export const Projetos = () => {
  return (
    <Card>
      <CardTitle>
        projetos <CardSubtitle> variados</CardSubtitle>
      </CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            <Link url="https://jos3s.dev/linktree/" newTab>
              Linktree
            </Link>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            <Link url="https://booksfinder.jos3s.dev/" newTab>
              Booksfinder
            </Link>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            <Link url="https://letmeask.jos3s.dev/" newTab>
              Letmeask (NLW#06)
            </Link>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            <Link url="https://pokedex.jos3s.dev/" newTab>
              Pokédex
            </Link>
          </ItemText>
        </Item>
      </List>
    </Card>
  );
};
