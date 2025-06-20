// ProgressScore.jsx
import React from "react";
import styled, { css } from "styled-components";
// Importas la ruta y no como componente
import PointsSrc from "../../assets/Points.svg";

// Contenedor del score
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 28vw;
  padding-right: 20px;

  ${props => props.results && css`
    justify-content: center;
    padding: 0;
  `}
`;

// Estilo del número
const Score = styled.p`
  font-family: Bungee;
  font-size: 64px;
  line-height: 77px;
  color: #FF8A00;
  -webkit-text-stroke: 2px #000;
  text-shadow: 4px 4px 4px rgba(0,0,0,0.25);
  margin: 20px;
`;

// Ahora un <img> que siempre tenga la misma altura que el texto
const PointsImg = styled.img`
  height: 6em;       /* 1em = altura de la fuente (64px) */
  width: 6em;       /* ancho automático para mantener proporción */
  margin-left: 0.25em; /* un pequeño espacio antes de la moneda */
  flex-shrink: 0;
  object-fit: contain;
`;

const ProgressScore = props => (
  <ScoreContainer results={props.results}>
    <Score>{props.count}</Score>
    <PointsImg src={PointsSrc} alt="points" />
  </ScoreContainer>
);

export default ProgressScore;
