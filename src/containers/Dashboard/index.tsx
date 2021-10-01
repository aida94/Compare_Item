import React, { useEffect, useState } from "react";
import cx from "classnames";

import Loading from "../../components/atomic-ui/Loading";
import Text from "../../components/atomic-ui/Text";
import Badge from "../../components/atomic-ui/Badge";
import Product from "../../components/Product";
import Option from "../../components/Option";
import Features from "../../shared/constants";
import { getProduct } from "../../shared/api";
import { ProductI } from "../../shared/interfaces";
import { capitalizeFirstLetter } from "../../shared/utils.ts/CapitalizeFirstLetter";
import styles from "./dashboard.module.scss";

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterdProducts, setFilteredProducts] = useState<ProductI[]>([]);
  const [isDiff, setIsDiff] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setLoading(true);

    getProduct()
      .then((res) => setProducts(res))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredProducts(products?.filter((el) => el.display === true));
    setIsDiff({});
  }, [products]);

  const handleCheck = (index: number) => {
    const newArray = products;
    newArray[index].display = !newArray[index].display;

    setProducts([...newArray]);
  };

  const handleRemoveProduct = (productNumber: string) => {
    console.log(productNumber);
    products.map((el) => {
      if (el.Artikelnummer === productNumber) {
        el.display = false;
      }
      return el;
    });

    setProducts([...products]);
  };

  return (
    <div className="m-4">
      <Text
        name={`${filterdProducts?.length} product to compare`}
        className="h4 text-primary"
      />
      <hr />

      <Text
        name="Your Selections"
        className="h6 text-primary font-weight-light "
      ></Text>

      {loading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr className="d-flex align-items-center mb-5">
              <th
                scope="col"
                className={cx(
                  styles.leftSidebar,
                  styles.noBottomBorder,
                  styles.rightBorder
                )}
              >
                {products?.map((product, index) => (
                  <Option
                    key={index}
                    product={product}
                    index={index}
                    handleCheck={handleCheck}
                  />
                ))}
              </th>

              {filterdProducts.map((product, index) => (
                <th
                  scope="col"
                  key={index}
                  className={cx(styles.noBottomBorder, styles.productWidth)}
                >
                  <Product
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="d-flex align-items-center">
              <td className={cx(styles.leftSidebar)}>
                <Text name="Badges" className={cx(styles.text, "h6")} />
              </td>

              {filterdProducts.map((product, index) => {
                const badgeArray = product.badges.split("|");

                return (
                  <td
                    key={index}
                    className={cx(styles.noBottomBorder, styles.productWidth)}
                  >
                    {badgeArray.map((badge, index) => (
                      <Badge key={index} badge={badge} />
                    ))}
                  </td>
                );
              })}
            </tr>

            {Features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="d-flex align-items-center">
                <td className={cx(styles.leftSidebar, styles.rightBorder)}>
                  <Text
                    name={capitalizeFirstLetter(feature)}
                    className={cx(styles.text, "h6")}
                  />
                </td>

                {filterdProducts.map((product, index) => {
                  const value = product[feature];

                  if (index > 0) {
                    const previousValue = products[index - 1][feature];

                    if (value !== previousValue && !isDiff[featureIndex]) {
                      setIsDiff({ [featureIndex]: true, ...isDiff });
                    }
                  }

                  return (
                    <td
                      key={index}
                      className={cx(
                        styles.productWidth,
                        isDiff[featureIndex] && "bg-light"
                      )}
                    >
                      <Text
                        name={value.toString()}
                        className={cx(isDiff[featureIndex] && styles.boldText)}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
