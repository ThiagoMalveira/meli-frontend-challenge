import Header from "@/pages/components/Header";
import { fireEvent, render } from "@testing-library/react";

describe("Home", () => {
  it("should render the header with logo and input component correctly", () => {
    const handleChangeSearchTerm = jest.fn();
    const action = jest.fn();
    const { getByAltText, getByPlaceholderText } = render(
      <Header handleChangeSearchTerm={handleChangeSearchTerm} action={action} />
    );
    expect(getByAltText("logo mercado livre")).toBeInTheDocument();
    expect(getByPlaceholderText("Nunca dejes de buscar")).toBeInTheDocument();
  });

  it("should trigger handleChangeSearchTerm on text change", () => {
    const handleChangeSearchTerm = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Header handleChangeSearchTerm={handleChangeSearchTerm} action={action} />
    );
    const inputElement = getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleChangeSearchTerm).toHaveBeenCalledWith("test");
  });

  it("should trigger action on button click", () => {
    const handleChangeSearchTerm = jest.fn();
    const action = jest.fn();
    const { getByRole } = render(
      <Header handleChangeSearchTerm={handleChangeSearchTerm} action={action} />
    );
    fireEvent.click(getByRole("button"));
    expect(action).toHaveBeenCalled();
  });

  it("should display logo image with correct src and alt attributes", () => {
    const handleChangeSearchTerm = jest.fn();
    const action = jest.fn();
    const { getByAltText } = render(
      <Header handleChangeSearchTerm={handleChangeSearchTerm} action={action} />
    );
    const logoImage = getByAltText("logo mercado livre");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render the header with extremely long input values", () => {
    const handleChangeSearchTerm = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Header handleChangeSearchTerm={handleChangeSearchTerm} action={action} />
    );
    const longInputValue =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: longInputValue },
    });
    expect(handleChangeSearchTerm).toHaveBeenCalledWith(longInputValue);
  });

  it("should render the header with logo and input component correctly when action prop is an empty function", () => {
    const handleChangeSearchTerm = jest.fn();
    const { getByAltText, getByPlaceholderText } = render(
      <Header
        handleChangeSearchTerm={handleChangeSearchTerm}
        action={() => {}}
      />
    );
    expect(getByAltText("logo mercado livre")).toBeInTheDocument();
    expect(getByPlaceholderText("Nunca dejes de buscar")).toBeInTheDocument();
  });
});
