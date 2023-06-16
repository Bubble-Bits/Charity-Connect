import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryPropsWithFallback } from "react-error-boundary";
// expect(screen.getByText("Rating And Reviews!")).toBeInTheDocument();
import React from "react";
import Home from "@/app/page";

function add(a, b) {
  return a + b;
}

test("add() should add two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
it("renders without crashing", async () => {
  render(<Home />);
  expect(screen.getByText("Next.js")).toBeInTheDocument();
});
