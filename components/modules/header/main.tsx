"use client";
import Container from "@/components/custom/Container";
import Logo from "@/components/custom/Logo";
import Row from "@/components/custom/Row";
import { useState } from "react";
import IconsGroups from "./IconsGroups";
import MainMenu from "./MainMenu";
import MobileButton from "./MobileButton";
import React from "react";

const Main = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return (
    <>
      <section className="h-full">
        <Container>
          <Row className="justify-between">
            <MobileButton />
            <Logo />
            <MainMenu />
            <IconsGroups
              openSearchBar={openSearchBar}
              setOpenSearchBar={setOpenSearchBar}
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
