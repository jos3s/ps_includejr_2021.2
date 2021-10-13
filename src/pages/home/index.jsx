import * as Styled from "./styles";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import { SideBar } from "../../components/SideBar";
import { Sobre } from "../../templates/Sobre";
import { Exp } from "../../templates/Exp";
import { Livros } from "../../templates/Livros";
import { Series } from "../../templates/Series";
import { Musicas } from "../../templates/Musicas";
import { Projetos } from "../../templates/Projetos";

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.Carousel>
        <Flicking align="prev" bound={true}>
          <div>
            <Sobre />
          </div>
          <div>
            <Exp />
          </div>
          <div>
            <Series />
          </div>
          <div>
            <Livros />
          </div>
          <div>
            <Musicas />
          </div>
          <div>
            <Projetos />
          </div>
        </Flicking>
      </Styled.Carousel>
      <SideBar />
    </Styled.Container>
  );
};
