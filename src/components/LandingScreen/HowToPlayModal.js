import React from "react";
import styled from "styled-components";

// Iconos para cada tacho (importados como rutas)
import NoAprovechables from "../../assets/NoAprovechables.svg";
import Plastico from "../../assets/Plastico.svg";
import PapelCarton from "../../assets/PapelCarton.svg";
import Organicos from "../../assets/Organicos.svg";
import Metales from "../../assets/Metales.svg";
import Vidrio from "../../assets/Vidrio.svg";
import Peligrosos from "../../assets/Peligrosos.svg";

import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  BadgeBox as BaseBadgeBox,
  CloseCross
} from "../MasterCss";

// Wrapper para controlar el tamaño de los íconos
const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 0.5em;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// Extiende BadgeBox para alinear icono y texto
const BadgeBox = styled(BaseBadgeBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  padding: 1em;
  img, div {
    flex-shrink: 0;
  }
`;

const HowToPlayBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
`;

const CenterChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: stretch;
`;

const HowToPlayModal = ({ handleClose }) => (
  <HowToPlayBox>
    <CloseCross onClick={handleClose} />
    <PageHeader>
      Cómo segregar residuos<br />
      Gestión No Municipal
    </PageHeader>
    <CenterChildren>
      {/* Residuos no aprovechables */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={NoAprovechables} alt="No aprovechables" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>residuos no aprovechables</strong>
            (pañales, cerámica, espejos rotos) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Plásticos */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={Plastico} alt="Plásticos" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>plásticos</strong> limpios
            (botellas, envases, bolsas) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Papel y cartón */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={PapelCarton} alt="Papel y cartón" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>papel y cartón</strong>
            (cajas, folletos, periódicos) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Orgánicos */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={Organicos} alt="Orgánicos" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>orgánicos</strong>
            (restos de comida, cáscaras, posos de café) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Metales */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={Metales} alt="Metales" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>metales</strong>
            (latas, latitas, objetos de aluminio) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Vidrio */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={Vidrio} alt="Vidrio" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>vidrio</strong>
            (botellas, frascos, tarros) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>

      {/* Peligrosos */}
      <MessageBox>
        <BadgeBox>
          <IconWrapper>
            <img src={Peligrosos} alt="Peligrosos" />
          </IconWrapper>
          <BoxMessage>
            Arrastra y suelta <strong>residuos peligrosos</strong>
            (pilas, lámparas fluorescentes, solventes) en este tacho.
          </BoxMessage>
        </BadgeBox>
      </MessageBox>
    </CenterChildren>

    <Button primary handleClick={handleClose} label="Cerrar" />
  </HowToPlayBox>
);

export default HowToPlayModal;
