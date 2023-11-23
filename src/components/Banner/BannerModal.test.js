import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import BannerModal from "./BannerModal";

describe("Banner modal", () => {
  test("search for mass word", () => {
    render(
      <Provider store={store}>
        <BannerModal />
      </Provider>
    );
    const regex =
      /Discover informations about SpaceX rockets with Rocketseeker/i;
    const element = screen.getByText(regex);
    expect(element).toBeInTheDocument();
  });
});
