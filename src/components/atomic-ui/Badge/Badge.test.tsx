import { render, screen } from "@testing-library/react";

import BadgeProps from ".";

const props = {
  badge:
    "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/egt/pubnl/industriele slangen/rubber slangen/chemieslangen/rubber-chemieslang-rx-ultrafixx-md-pinl-nl.jpg",
};

test("renders with main element and proper props", () => {
  render(<BadgeProps badge={props.badge} />);

  const image = screen.getByAltText("badge");

  expect(image).toBeInTheDocument();
  expect(image).toHaveClass("badgeImage");
  expect(image).toHaveAttribute("src", props.badge);
});
