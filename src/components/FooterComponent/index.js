import React from "react";
import { Footer } from "./style";

const FooterComponent = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Footer>
      <span className="span">&copy; {currentYear} | Gabriel Xavier Cardoso <a className="link" target="_blank" href="https://portfolio-manigoldtlc.vercel.app/">me conheça</a></span>
    </Footer>
  );
};

export default FooterComponent;
