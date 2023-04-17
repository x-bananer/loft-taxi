import React from 'react';
import { Login } from './Login';
import { render } from '@testing-library/react';

describe("Login", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Login />);
      expect(getByLabelText("Email")).toHaveAttribute("name", "email");
      expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
    })
  })
})