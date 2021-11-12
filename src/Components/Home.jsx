import React from "react";
import Sections from "./Sections";
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <Sections
        title="Model 3 tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="model-3.jpg"
      />
      <Sections
        title="Model S tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="model-s.jpg"
      />
      <Sections
        title="Model X tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="model-x.jpg"
      />
      <Sections
        title="Model Y tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="model-y.jpg"
      />
      <Sections
        title="Model Y tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="solar-panel.jpg"
      />
      <Sections
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButton="Customer Order"
        rightButton="existing inventory"
        backgroundImg="solar-roof.jpg"
      />
      <Sections
        title="Model Y tesla car"
        description="buy car with screen touch"
        leftButton="Customer Order"
        rightButton=""
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
