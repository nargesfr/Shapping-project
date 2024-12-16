import React from "react";
import styles from "./checkbox.module.scss";

const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <div className={${styles.checkboxContainer} ${className}}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
