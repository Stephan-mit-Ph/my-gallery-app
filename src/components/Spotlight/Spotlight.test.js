import { render, screen } from "@testing-library/react";
import Spotlight from ".";

const testpieces= [{name:"test", artist:"test", imageSource:"/"}]
test("renders artistname at the Spotlight page", () => {
  render(<Spotlight pieces={testpieces} />);
  
  const headingTester = screen.getByRole('heading', { name: /Spotlight/i });
  
  expect(headingTester).toBeInTheDocument();
  
});
