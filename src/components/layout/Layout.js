import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = (props) => (
  <React.Fragment>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
);
