import React from "react";
import Hi from "./hi";
import { render } from "@testing-library/react";

describe("Name of the group", () => {
  test("should ", () => {
    const { getByText } = render(<Hi text="hi" />);
    getByText("hi");
  });
});
