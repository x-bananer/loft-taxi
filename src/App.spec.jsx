import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock("./pages/Login", () => ({ LoginWithAuth: () => <div>Login content</div> }));
jest.mock("./pages/Map", () => ({ MapWithAuth: () => <div>Map content</div> }));
jest.mock("./pages/Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div> }));
jest.mock("./pages/Registration", () => ({ Registration: () => <div>Registration content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App isLoggedIn />);
      fireEvent.click(getByText("Карта"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});