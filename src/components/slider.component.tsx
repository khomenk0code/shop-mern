import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

type ArrowProps = {
    direction: "left" | "right";
};

const Slider: React.FC = () => {
    return (
        <Container>
            <Arrow direction="left">
                <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" color="#fff7f7" />
            </Arrow>
            <Arrow direction="right">
                <FontAwesomeIcon icon={faCircleArrowRight} size="2xl" color="#fff7f7" />
            </Arrow>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #6495ed;
  position: relative;
`;

const Arrow = styled.div<ArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  border-radius: 50%;
  height: 1rem;
`;




export default Slider;
