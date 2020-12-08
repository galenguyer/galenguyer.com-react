import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/Home";

test("renders GitHub link", () => {
    render(
        <MemoryRouter initialEntries={["/notHome"]}>
            <Home />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Github/i);
    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute("href", "https://github.com/galenguyer");
});

test("renders Resume link", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Resume/);
    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute("href", "https://cdn.galenguyer.com/doc/Galen-Guyer-Resume-latest.pdf");
});
