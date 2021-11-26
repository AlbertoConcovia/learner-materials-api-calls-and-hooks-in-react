import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {

    it("Navigation - Given the required props, When the button Show All is clicked, Then the Button Text should be Show Favourites", () => {
    render(<Navigation />);

    const buttonText = screen.getByText("Show Favourites");

    expect(buttonText).toBeInTheDocument();
  });

  
});
