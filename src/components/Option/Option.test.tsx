import { render, screen } from "@testing-library/react";

import mock from "../../mock/mocked-product.json";
import ids from "../../shared/test-ids.json";
import Option from "./";

test("renders with main element and proper props", () => {
  render(
    <Option index={1} product={mock.products[0]} handleCheck={() => {}} />
  );
  const input = screen.getByTestId(ids.optionInput);
  const label = screen.getByTestId(ids.optionLabel);

  expect(input).toBeInTheDocument();
  expect(label).toBeInTheDocument();

  expect(input).toHaveAttribute("checked");
  expect(input.id).toBe(mock.products[0].Artikelnummer);
  expect(label.textContent).toContain(mock.products[0].name);
});
