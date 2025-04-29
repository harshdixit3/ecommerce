import Container from "@/components/custom/Container";
import Logo from "@/components/custom/Logo";
import Row from "@/components/custom/Row";
import React from "react";
import IconsGroups from "./IconsGroups";
import MainMenu from "./MainMenu";
import MobileButton from "./MobileButton";

const Main = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <MobileButton />
            <Logo />
            <MainMenu />
            <IconsGroups />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
