import { Loader } from "./Loader";
import { render } from "@testing-library/react";

describe("Loader", () => {
  it("should match snapshot", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
