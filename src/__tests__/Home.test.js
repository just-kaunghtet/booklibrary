
import { BrowserRouter } from "react-router-dom";
import Home from "../Home"
import { render, screen } from "@testing-library/react";
const mockUsedNavigate = jest.fn();
const mockUsedEffect= jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
  useEffect: ()=> mockUsedEffect,
}));
describe(Home, () => {
    it("renders home page", () => {
      render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
      );
    });
  });