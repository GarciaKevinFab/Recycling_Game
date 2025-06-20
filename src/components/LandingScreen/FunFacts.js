import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
`;

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
    line-height: 1.5em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const ExtLink = styled.a`
  color: #FF8A00;
`;

const FunFactsModalES = ({ handleClose }) => {
  return (
    <FunFactsBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>Datos Curiosos sobre el Reciclaje</PageHeader>
      <BoxMessage>
        <p>Todos los recursos naturales que usamos y los residuos que generamos afectan nuestro planeta y a los animales que viven en él.</p>
        <p>Puede sonar alarmante, pero ¡todos podemos hacer algo al respecto!</p>
        <p>Podemos <OrangeText>REDUCIR, REUTILIZAR</OrangeText> y <OrangeText>RECICLAR</OrangeText> para evitar que nuestra basura termine en vertederos o en el océano.</p>
      </BoxMessage>

      <MessageBox primary>
        <BoxMessage>
          <p><OrangeText>REDUCIR</OrangeText></p>
          <FactList>
            <li>Al hacer compras, compra solo lo que realmente necesitas.</li>
            <li>¿Puedes comprar en tiendas de cero residuos?</li>
            <li>Camina siempre que puedas en lugar de usar el auto.</li>
            <li>Cierra la llave al cepillarte los dientes para ahorrar agua.</li>
            <li>Apaga la televisión y los aparatos eléctricos cuando no los uses.</li>
          </FactList>
          <Flexy>
            <Walk width="150px" height="150px" />
            <Tap width="150px" height="150px" />
            <TV width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p><OrangeText>REUTILIZAR</OrangeText></p>
          <FactList>
            <li>Lleva bolsas reutilizables al mercado.</li>
            <li>Cuando algo se rompa, intenta repararlo antes de desecharlo.</li>
            <li>Si no se puede reparar, busca una nueva función para ese objeto.</li>
            <li>Dona lo que ya no necesitas a organizaciones de la comunidad.</li>
            <li>Reutiliza papel por ambos lados para dibujar o escribir.</li>
          </FactList>
          <Flexy>
            <PlasticBag width="150px" height="150px" />
            <Shirt width="150px" height="150px" />
            <Paper width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p><OrangeText>RECICLAR</OrangeText></p>
          <FactList>
            <li>Prefiere productos fabricados con materiales reciclados.</li>
            <li>Separa vidrio, latas, plástico y papel para reciclarlos correctamente.</li>
            <li>Lleva baterías, cartuchos de tinta y ropa a centros de reciclaje.</li>
            <li>Usa residuos de cocina para compostar en casa.</li>
          </FactList>
          <Flexy>
            <PlasticBottle width="150px" height="150px" />
            <DrinksCan width="150px" height="150px" />
            <Apple width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>Para más información sobre reciclaje y reducción de residuos, visita <ExtLink href="https://www.recyclenow.com/" target="_blank">Recicla Ahora</ExtLink>.
            <br />
            <small>Contenido desarrollado por la Universidad Continental</small></p>
        </BoxMessage>
      </MessageBox>

      <Button primary handleClick={handleClose} label="Cerrar" />
    </FunFactsBox>
  );
};

export default FunFactsModalES;
