import { render, screen } from "@testing-library/react";

import ids from "../../../shared/test-ids.json";
import Text from "./";

const props = {
  name: "Badges",
  className: "h6 text-primary",
};

test("renders with main element and proper props", () => {
  render(<Text name={props.name} className={props.className} />);
  const text = screen.getByTestId(ids.text);

  expect(text).toBeInTheDocument();
  expect(text.textContent).toContain(props.name);
  expect(text).toHaveClass(props.className);
});
