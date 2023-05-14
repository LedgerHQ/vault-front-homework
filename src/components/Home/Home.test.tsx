import { Home } from "./Home";
import { useData } from "./useData";
import { render } from "@testing-library/react";

jest.mock("../Result/Result", () => ({
  Result: () => <div data-testid="ResultComponent" />,
}));

jest.mock("../TextInput/TextInput", () => ({
  TextInput: () => <div data-testid="textInputComponent" />,
}));

jest.mock("../Loader/Loader", () => ({
  Loader: () => <div data-testid="LoaderComponent" />,
}));

jest.mock("./useData");

const mockUseData = useData as jest.MockedFunction<any>;

describe("Home component", () => {
  it("should display Loader Component and not display Results and Reset components when data is fetching", () => {
    mockUseData.mockReturnValue({
      isLoading: true,
      results: [],
    });

    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("LoaderComponent")).toBeTruthy();
    expect(queryByTestId("ResultComponent")).toBeFalsy();
    expect(queryByTestId("Reset")).toBeFalsy();
  });

  it("should display 'no result' when data is fetched with no result", () => {
    mockUseData.mockReturnValue({
      isLoading: false,
      results: [],
    });

    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("LoaderComponent")).toBeFalsy();
    expect(queryByTestId("ResultsFound")).toBeFalsy();
    expect(queryByTestId("NoResult")).toBeTruthy();
    expect(queryByTestId("Reset")).toBeTruthy();
  });

  it("should display results when data is fetched", () => {
    mockUseData.mockReturnValue({
      isLoading: false,
      results: [
        {
          id: 1,
          type: "ACCOUNT_CREATED",
          data: {
            id: 1,
            name: "toto",
            currency: "bitcoin",
          },
        },
      ],
    });

    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("LoaderComponent")).toBeFalsy();
    expect(queryByTestId("ResultsFound")).toBeTruthy();
    expect(queryByTestId("NoResult")).toBeFalsy();
    expect(queryByTestId("Reset")).toBeTruthy();
  });

  it("should display the right amount of results (1) in the label", () => {
    mockUseData.mockReturnValue({
      isLoading: false,
      results: [
        {
          id: 1,
          type: "ACCOUNT_CREATED",
          data: {
            id: 1,
            name: "toto",
            currency: "bitcoin",
          },
        },
      ],
    });

    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("resultLabel")?.textContent).toEqual(
      "1 result found !"
    );
  });

  it("should display the right amount of results (2) in the label", () => {
    mockUseData.mockReturnValue({
      isLoading: false,
      results: [
        {
          id: 1,
          type: "ACCOUNT_CREATED",
          data: {
            id: 1,
            name: "toto",
            currency: "bitcoin",
          },
        },
        {
          id: 2,
          type: "ACCOUNT_CREATED",
          data: {
            id: 2,
            name: "toto",
            currency: "bitcoin",
          },
        },
      ],
    });

    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("resultLabel")?.textContent).toEqual(
      "2 results found !"
    );
  });
});
