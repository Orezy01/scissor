import { render, screen, cleanup } from "@testing-library/react";
import Faq from "../../pages/Faq";

afterEach(() => {
  cleanup();
});

test("should render Faq component", () => {
  render(<Faq />);
  const FaqElement = screen.getByTestId("faq-1");
  expect(FaqElement).toBeInTheDocument();
  expect(FaqElement).toHaveTextContent("FAQs");
});
