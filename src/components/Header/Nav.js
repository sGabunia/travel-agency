import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import { useSelector } from "react-redux";

import styles from "./Nav.module.css";
import img from "../../images/ge.png";

import { CurrencyModal } from "../CurrencyModal/CurrencyModal";

export const Nav = () => {
  const { region, currency } = useSelector(({ settings }) => settings);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navCulture}>
          <button className={styles.navCultureButton} onClick={handleOpen}>
            <div>
              <span>English(UK)</span>
              <img src={img} alt="country flag" />
              <span>{region}</span>
              <span>{currency}</span>
            </div>
          </button>
          <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
            <CurrencyModal closeModal={handleClose} />
          </Dialog>
        </li>
      </ul>
    </nav>
  );
};
