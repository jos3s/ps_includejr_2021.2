import { Item, ItemText, List } from "../../components/List";
import Card, { CardSubtitle, CardTitle } from "../../components/Card";

export const Musicas = () => {
  return (
    <Card>
      <CardTitle>
        músicas <CardSubtitle> recentes</CardSubtitle>
      </CardTitle>
      <List uppercase>
        <Item>
          <ItemText>
            Venus Fly Trap (Sofi Tukker Remix)<p>Marina</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Bielzinho/Bielzinho (Xinobi Remix) <p>O Terno</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Melô da Ilusão <p>Duda Beat</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            A Kiss <p>The Driver Era</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Antes que eu morra <p>Sinara</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Pissaicou <p>Biltre</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Wilson <p>Biltre</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Aceitar (Part. Lenine) <p>Biltre</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Espero que você entenda<p>Flerte Flamigo</p>
          </ItemText>
        </Item>
        <Item>
          <ItemText>
            Competição de ego <p>O Grilo</p>
          </ItemText>
        </Item>
      </List>
    </Card>
  );
};
