import { render, screen } from "@testing-library/react";

import mock from "../../mock/mocked-product.json";
import ids from "../../shared/test-ids.json";
import Product from "./";

test("renders with main element and proper props", () => {
  render(<Product product={mock.products[0]} handleRemoveProduct={() => {}} />);
  const icon = screen.getByTestId(ids.trashIcon);
  const image = screen.getByTestId(ids.productImage);
  const name = screen.getByTestId(ids.productName);
  const price = screen.getByTestId(ids.productPrice);

  expect(icon).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(price).toBeInTheDocument();

  expect(icon).toHaveClass("fa-trash");
  expect(image).toHaveAttribute("src", mock.products[0].productImage);
  expect(name.textContent).toContain(mock.products[0].name);
  expect(price.textContent).toContain(mock.products[0].listPrice);
});
