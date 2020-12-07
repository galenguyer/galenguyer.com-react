import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders Brand", () => {
    render(<App />);
    const linkElement = screen.getByText(/Galen Guyer/i);
    expect(linkElement).toBeInTheDocument();
});
