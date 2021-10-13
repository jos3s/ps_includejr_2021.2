import styled from "styled-components";
/* import { Container as SideBar } from "../../components/SideBar/styles"; */

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px;
  grid-template-areas: "cards sidebar";

  .flicking-viewport {
    width: 750px;
    overflow: hidden;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
