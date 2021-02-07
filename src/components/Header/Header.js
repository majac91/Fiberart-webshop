import React from "react";
import headerStyles from "./header.module.css";

//header imgs
import header1 from "../../img/header1.jpg";
import header2 from "../../img/header2.jpg";
import header3 from "../../img/header3.jpg";
import header4 from "../../img/asadad.jpg";

export default function Header() {
  return (
    <header className={headerStyles.container}>
      <div className={`${headerStyles.headerImgs} container`}>
        <img className={headerStyles.headerImg} src={header1}></img>
        <img className={headerStyles.headerImg} src={header2}></img>
        <img className={headerStyles.headerImg} src={header3}></img>

        <img className={headerStyles.headerImg} src={header4}></img>
      </div>
    </header>
  );
}
