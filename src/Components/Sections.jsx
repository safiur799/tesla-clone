import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Sections({
  title,
  description,
  leftButton,
  rightButton,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>

            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/Images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Sections;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/Images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  opacity: 0.85;
  border-radius: 100px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  animation: bounce 2s infinite;
`;
const Buttons = styled.div``;
