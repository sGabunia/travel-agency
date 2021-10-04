import React from "react";
import { Button } from "@mui/material";
import styles from "./CurrencyModal.css";
import { style } from "@mui/system";

export const CurrencyModal = () => {
  return (
    <section className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>Regional Settings</h2>
        <button>close</button>
      </header>
      <div className={styles.modalContent}>
        <form>
          <fieldset>
            <label htmlFor="">Language</label>
            <select name="" id=""></select>
          </fieldset>
          <fieldset>
            <label htmlFor="">Country/Region</label>
            <select name="" id=""></select>
          </fieldset>
          <fieldset>
            <label htmlFor="">Currency</label>
            <select name="" id=""></select>
          </fieldset>
          <fieldset>
            <Button>Save</Button>
            <Button>Calcel</Button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
