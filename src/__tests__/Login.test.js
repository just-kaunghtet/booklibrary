import Login from "../Login"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));
describe(Login, () => {
    test("renders login page", () => {
      render(<Login/>);
      const header=screen.getByRole("heading",{
        name: /welcome to b-library/i
      })
      expect(header).toBeInTheDocument()
      const  emailInput=screen.getByPlaceholderText(/email/i)
      const passwordInput=screen.getByPlaceholderText(/email/i)
      expect(emailInput).toBeInTheDocument()
      expect(passwordInput).toBeInTheDocument()
      const loginButton=screen.getByRole("button")
      expect(loginButton).toBeInTheDocument()
    });
  });