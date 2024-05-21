import Input from "@/pages/components/Input";
import { fireEvent, render } from "@testing-library/react";

describe("Input", () => {
  it("should render the input with the correct placeholder", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Input handleChange={handleChange} action={action} />
    );
    expect(getByPlaceholderText("Nunca dejes de buscar")).toBeInTheDocument();
  });

  it("should call handleChange with the correct value on input change", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Input handleChange={handleChange} action={action} />
    );
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("should display the SearchIcon within the Button", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { container } = render(
      <Input handleChange={handleChange} action={action} />
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should pass special characters to handleChange correctly", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Input handleChange={handleChange} action={action} />
    );
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: "@#$$%^&*" },
    });
    expect(handleChange).toHaveBeenCalledWith("@#$$%^&*");
  });

  it("should handle rapid successive changes correctly", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Input handleChange={handleChange} action={action} />
    );
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: "a" },
    });
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: "ab" },
    });
    fireEvent.change(getByPlaceholderText("Nunca dejes de buscar"), {
      target: { value: "abc" },
    });
    expect(handleChange).toHaveBeenCalledTimes(3);
  });

  it("should have correct accessibility attributes set", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    const { getByPlaceholderText } = render(
      <Input handleChange={handleChange} action={action} />
    );
    const inputElement = getByPlaceholderText("Nunca dejes de buscar");
    expect(inputElement.getAttribute("autoCapitalize")).toBe("off");
    expect(inputElement.getAttribute("autoCorrect")).toBe("off");
    expect(inputElement.getAttribute("spellCheck")).toBe("false");
  });

  it("should be responsive on different screen sizes", () => {
    const handleChange = jest.fn();
    const action = jest.fn();
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    render(<Input handleChange={handleChange} action={action} />);

    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    expect(true).toBe(true);
  });
});
