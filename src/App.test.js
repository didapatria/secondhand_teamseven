import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import LoginPage from "./pages/auth/Login";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <div>
      <App />
      <LoginPage />
    </div>,
  );
});

afterEach(cleanup);

// Definition of test
describe("UI Test", () => {
  test("should have a title", () => {
    expect(screen.getByTitle("secondhand")).toBeInTheDocument();
  });

  test("should show a text in the document", () => {
    expect(screen.getByText("Second Hand.")).toBeInTheDocument();
  });
});
