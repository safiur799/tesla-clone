import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Headers() {
  return (
    <Container>
      <a href="sfsj">
        <img src="/Images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="sioj">model-3</a>

        <a href="sioj">model-s</a>

        <a href="sioj">modelx-x</a>

        <a href="sioj">model-y</a>
      </Menu>
      <RightMenu>
        <a href="sjf">shop</a>
        <a href="sjf">tesla account</a>
        <CustomMenu />
      </RightMenu>
      {/* <BurgerMenu>
        <CloseMenu />
        <li>
          <a href="soie">existing inventory</a>
        </li>
        <li>
          <a href="soie">model x</a>
        </li>
        <li>
          <a href="soie">model y</a>
        </li>
        <li>
          <a href="soie">model 3</a>
        </li>
        <li>
          <a href="soie">order right now</a>
        </li>

        <li>
          <a href="soie">change the status of the car</a>
        </li>
      </BurgerMenu> */}
    </Container>
  );
}

export default Headers;
const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  min-width: 80px;
  padding: 0 20px;
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0 10px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 16;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  list-style: none;
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
`;
const CloseMenu = styled(CloseIcon)``;
