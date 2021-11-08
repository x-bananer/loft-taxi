import React from 'react';
import { Registration } from './Registration';
import { render } from '@testing-library/react';

describe("Registration", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Registration />);
      expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
      expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
      expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");
    })
  })
})