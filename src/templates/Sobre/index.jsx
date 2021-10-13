import { Text } from "../../components/Text";
import Card, { CardSubtitle, CardTitle } from "../../components/Card";
import { Divider } from "../../components/Divider";

export const Sobre = () => {
  return (
    <Card>
      <CardTitle>
        sobre <CardSubtitle> min</CardSubtitle>
      </CardTitle>
      <Text>
        Olá, tenho 19 anos, moro em Russas e sou estudante de Engenharia de
        Software na UFC. Sou apaixonado por tecnologia e por programação desde
        de que ganhei o meu primeiro celular, um Galaxy Y Duos. Além da
        programação, sou apaixonado por livros, séries, músicas, filmes e jogos.
      </Text>
      <Divider />
      <Text>...</Text>
    </Card>
  );
};
