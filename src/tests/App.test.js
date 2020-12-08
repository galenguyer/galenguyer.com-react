import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("clicking Name in Brand sends you Home", () => {
    render(
        <MemoryRouter initialEntries={["/404"]}>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByText(/404 Not Found/)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Galen Guyer/i), leftClick);

    expect(screen.getByText(/Microsoft/i)).toBeInTheDocument();
});
