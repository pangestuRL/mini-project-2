import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./index.jsx";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("HeroSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should navigate to /specialist if accessToken exists", () => {
    localStorage.setItem("accessToken", "some-token");

    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const button = screen.getByText("Meet our specialists");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/specialist");
  });

  it("should navigate to /login if accessToken does not exist", () => {
    localStorage.removeItem("accessToken");

    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const button = screen.getByText("Meet our specialists");
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});