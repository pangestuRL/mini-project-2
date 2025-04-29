import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Navbar from "./navbar/index.jsx";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });


  it("shows Login button when no token", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("LogIn")).toBeInTheDocument();
  });

  it("shows Logout button when token exists", () => {
    localStorage.setItem("accessToken", "mock-token");
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("shows Welcome message when username exists", () => {
    localStorage.setItem("email", "john.doe@example.com");
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome, john/i)).toBeInTheDocument();
  });

  it("navigates to login page when Login button is clicked", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("LogIn"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login");
  });

  it("clears localStorage and navigates to home when Logout button is clicked", () => {
    localStorage.setItem("accessToken", "mock-token");
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Logout"));
    expect(localStorage.getItem("accessToken")).toBeNull();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });

  it("applies correct background color when at homepage", () => {
    render(
        <MemoryRouter initialEntries={['/']}>  // Set path homepage
            <Navbar />
        </MemoryRouter>
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toHaveClass("bg-[#E6F6FE]");
    });

    it("applies correct background color when not at homepage", () => {
    render(
        <MemoryRouter initialEntries={['/some-other-page']}>  // Set path selain homepage
            <Navbar />
        </MemoryRouter>
    );
    const navbar = screen.getByTestId("navbar");  // Cari menggunakan data-testid
    expect(navbar).toHaveClass("bg-white");  // Memeriksa kelas background
    });
});
