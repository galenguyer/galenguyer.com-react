import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Brand from "../components/Brand";

test("renders Name", () => {
    render(
        <MemoryRouter>
            <Brand />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Galen Guyer/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Description", () => {
    render(
        <MemoryRouter>
            <Brand />
        </MemoryRouter>
    );
    const linkElement = screen.getByText(/Engineer/i);
    expect(linkElement).toBeInTheDocument();
});

test("Name Links to Home", () => {
    render(
        <MemoryRouter initialEntries={["/notHome"]}>
            <Brand />
        </MemoryRouter>
    );
    expect(screen.queryByText(/Galen Guyer/i)).toHaveAttribute('href', '/');
});