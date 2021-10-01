import React from "react";
import cx from "classnames";

import { ProductI } from "../../shared/interfaces";
import ids from "../../shared/test-ids.json";

import styles from "./product.module.scss";

interface ProductProps {
  product: ProductI;
  handleRemoveProduct: (value: string) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleRemoveProduct }) => {
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <i
          className={cx("fa fa-trash text-primary", styles.trashIcon)}
          onClick={() => handleRemoveProduct(product.Artikelnummer)}
          data-testid={ids.trashIcon}
        ></i>
      </div>
      <img
        className={styles.productImage}
        src={product.productImage}
        alt={product.Artikelnummer}
        data-testid={ids.productImage}
      />
      <h6 className="text-primary my-3" data-testid={ids.productName}>
        {product.name}
      </h6>
      <span className={styles.priceText} data-testid={ids.productPrice}>
        {product.listPrice} €
      </span>
    </>
  );
};

export default Product;
