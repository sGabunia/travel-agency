import React from "react";
import styles from "./Nav.module.css";
import img from "../../images/ge.png";
import { Button } from "@mui/material";

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navHelp}>
          <a href="">Help</a>
        </li>
        <li className={styles.navCulture}>
          <button className={styles.navCultureButton}>
            <div>
              <span>English(UK)</span>
              <img src={img} alt="country flag" />
              <span>Georgia</span>
              <span>₾ GEL</span>
            </div>
          </button>
        </li>
        <li>
          <Button>Log in</Button>
        </li>
      </ul>
    </nav>
  );
};
