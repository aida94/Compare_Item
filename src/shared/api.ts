import axios from "axios";

import { ProductI } from "./interfaces";

/**
 * Get Product
 * @returns {Promise<ProductI[]>}
 */
export async function getProduct(): Promise<ProductI[]> {
  console.log(1);
  const { data } = await axios.get(
    "https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all"
  );
  return data.products;
}
