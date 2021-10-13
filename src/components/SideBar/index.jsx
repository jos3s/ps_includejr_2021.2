import * as Styled from "./styles";
import { Heading } from "../Heading";
import { Github } from "../social/Github";
import { Linkedin } from "../social/Linkedin";
import { Instagram } from "../social/Instagram";

export const SideBar = () => {
  return (
    <Styled.Container>
      <Heading uppercase size="xhuge">
        José Ulisses
      </Heading>
      <Styled.Social>
        <a
          href="http://instagram.com/joseulisses_"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <Instagram />
        </a>
        <a
          href="http://github.com/jos3s"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/jos3s"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <Linkedin />
        </a>
      </Styled.Social>
    </Styled.Container>
  );
};
