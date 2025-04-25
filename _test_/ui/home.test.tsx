import { test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Page from "@/app/(website)/(pages)/(home)/page";
import "@testing-library/jest-dom";

describe("unit test UI", () => {
  test("example", () => {
    render(<Page />);

    expect(screen.getByRole("heading")).toHaveTextContent("heading");
  });
});
