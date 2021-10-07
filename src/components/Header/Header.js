import React from "react";
import styles from "./Header.module.css";
import { MainLogo } from "../../icons/MainLogo";
import { Wrapper } from "../../utils/Wrapper/Wrapper";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.headerLogoWrapper}>
          <div>
            <button href="#">
              <MainLogo />
            </button>
          </div>
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
