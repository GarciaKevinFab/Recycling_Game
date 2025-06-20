import styled from "styled-components";

// Header fijo superior
export const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

// Contenedor de vidas
export const LivesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20vw;
`;

// Item móvil centrado
export const GameItem = styled.div`
  position: fixed;
  top: 20%;
  left: 5%;
  transform: translateX(-50%);
`;

// Texto del ítem
export const ItemText = styled.h2`
  position: fixed;
  bottom: 2%;
  width: 100vw;
  text-align: center;
  font-family: Bungee;
  font-size: 64px;
  line-height: 77px;
  color: #fff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  z-index: 1000;
`;

// Contenedor de tachos
export const BinsContainer = styled.div`
  position: fixed;
  bottom: 20vh;             /* ↑ Aumenta este valor para SUBIR los tachos
                               ↓ Disminúyelo para BAJAR los tachos */
  left: 0;
  width: 100%;
  padding: 1vh 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  pointer-events: none;
`;

// Caja de cada tacho
export const BinBox = styled.div`
  flex: 0 0 auto;
  width: 9vw;
  height: 9vw;
  min-width: 50px;
  min-height: 50px;
  max-width: 80px;
  max-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: all;
  overflow: visible;

  /* El wrapper de DropTarget ocupa todo el espacio */
  & > div {
    width: 100%;
    height: 100%;
  }

  /* La imagen SVG se ajusta proporcionalmente */
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
