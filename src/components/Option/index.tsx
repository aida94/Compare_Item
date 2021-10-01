import React from "react";
import cx from "classnames";

import { ProductI } from "../../shared/interfaces";
import ids from "../../shared/test-ids.json";

import styles from "./option.module.scss";

interface OptionProps {
  index: number;
  product: ProductI;
  handleCheck: (value: number) => void;
}

const Option: React.FC<OptionProps> = ({ product, index, handleCheck }) => {
  return (
    <div className={cx("form-check mb-3", styles.optionInput)}>
      <input
        id={product.Artikelnummer}
        className={cx("form-check-input", styles.checkInput)}
        type="checkbox"
        checked={product.display}
        onChange={() => handleCheck(index)}
        data-testid={ids.optionInput}
      />

      <label
        className="form-check-label"
        htmlFor={product.Artikelnummer}
        data-testid={ids.optionLabel}
      >
        {product.name}
      </label>
    </div>
  );
};

export default Option;
