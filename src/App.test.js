import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders Brand", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Galen Guyer/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders 404", () => {
    render(
        <MemoryRouter initialEntries={["/404"]}>
            <App />
        </MemoryRouter>
    );
    const linkElement = screen.queryByText(/Homepage/i);
    expect(linkElement).toBeNull();
});
