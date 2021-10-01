import { render, screen } from "@testing-library/react";

import ids from "../../../shared/test-ids.json";
import Loading from "./";

test("renders with main element and proper props", () => {
  render(<Loading />);
  const text = screen.getByTestId(ids.loading);

  expect(text).toBeInTheDocument();
  expect(text).toHaveClass("spinner-border text-primary mt-5");
});
