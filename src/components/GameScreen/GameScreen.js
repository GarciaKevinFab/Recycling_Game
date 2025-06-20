import React from "react";
import styled from "styled-components";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import OptionsModal from "./OptionsModal";
import Item from "./Item";
import LivesScore from "./LivesScore";
import { Container } from "../MasterCss";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";
import FunFactsModal from "../LandingScreen/FunFacts";
import * as SC from "./GameScreen.style";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import { ReactComponent as PauseIcon } from "../../assets/pause-icon.svg";

import NoAprovechables from "../../assets/NoAprovechables.svg";
import Plastico from "../../assets/Plastico.svg";
import PapelCarton from "../../assets/PapelCarton.svg";
import Organicos from "../../assets/Organicos.svg";
import Metales from "../../assets/Metales.svg";
import Vidrio from "../../assets/Vidrio.svg";
import Peligrosos from "../../assets/Peligrosos.svg";

import WineBottle from "../../images/wine-bottle.svg";
// Importamos la imagen de fondo
import Fondo from "../../assets/Fondo.jpg";

// Creamos un wrapper que añade el background al Container
const StyledContainer = styled(Container)`
  background: url(${Fondo}) no-repeat center center;
  background-size: cover;
`;

const bins = [
  { key: "noAprovechables", src: NoAprovechables, title: "No Aprovechables" },
  { key: "plastico", src: Plastico, title: "Plástico" },
  { key: "papelCarton", src: PapelCarton, title: "Papel y Cartón" },
  { key: "organicos", src: Organicos, title: "Orgánicos" },
  { key: "metales", src: Metales, title: "Metales" },
  { key: "vidrio", src: Vidrio, title: "Vidrio" },
  { key: "peligrosos", src: Peligrosos, title: "Peligrosos" }
];

const GameScreen = props => {
  const [currentItem, setCurrentItem] = React.useState({
    name: "Glass Bottles",
    src: WineBottle,
    bin: "vidrio",
    fact: "Families use around 330 glass bottles and jars every year"
  });
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [optionsModal, setOptionsModal] = React.useState(false);

  const dropReaction = currentBin => {
    setItemVisibility(false);
    if (currentItem.bin === currentBin) {
      setSuccessModal(true);
      props.setCount(c => c + 1);
    } else {
      setFailModal(true);
      props.setBadCount(b => b + 1);
    }
  };

  const showOptionsModal = () => setOptionsModal(o => !o);

  return (
    // Usamos StyledContainer para que cargue tu fondo.jpg
    <StyledContainer key="rendering">
      {successModal && (
        <SuccessModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          successModal={successModal}
          setSuccessModal={setSuccessModal}
        />
      )}
      {failModal && (
        <FailModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          failModal={failModal}
          setFailModal={setFailModal}
          badCount={props.badCount}
        />
      )}
      {optionsModal && (
        <OptionsModal
          optionsModal={optionsModal}
          setOptionsModal={setOptionsModal}
          setCount={props.setCount}
          setBadCount={props.setBadCount}
          funFactsModal={props.funFactsModal}
          setFunFactsModal={props.setFunFactsModal}
          howToPlayModal={props.howToPlayModal}
          setHowToPlayModal={props.setHowToPlayModal}
          showFunFactsModal={props.showFunFactsModal}
          hideFunFactsModal={props.hideFunFactsModal}
          hideHowToPlayModal={props.hideHowToPlayModal}
          showHowToPlayModal={props.showHowToPlayModal}
        />
      )}

      {props.howToPlayModal && (
        <HowToPlayModal handleClose={props.hideHowToPlayModal} />
      )}
      {props.funFactsModal && (
        <FunFactsModal handleClose={props.hideFunFactsModal} />
      )}

      <SC.Header>
        <PauseIcon onClick={showOptionsModal} cursor="pointer" />
        <SC.LivesContainer>
          <LivesScore
            badCount={props.badCount}
            successModal={successModal}
            failModal={failModal}
          />
        </SC.LivesContainer>
        <ProgressScore gameScreen count={props.count} />
      </SC.Header>

      <SC.GameItem>
        <DragDropContainer targetKey="bins">
          {itemVisibility && <Item item={currentItem} />}
        </DragDropContainer>
      </SC.GameItem>

      <SC.BinsContainer>
        {bins.map(({ key, src, title }) => (
          <SC.BinBox key={key}>
            <DropTarget targetKey="bins" onHit={() => dropReaction(key)}>
              <img src={src} alt={title} title={title} />
            </DropTarget>
          </SC.BinBox>
        ))}
      </SC.BinsContainer>

      <SC.ItemText>{currentItem.name}</SC.ItemText>
    </StyledContainer>
  );
};

export default GameScreen;
