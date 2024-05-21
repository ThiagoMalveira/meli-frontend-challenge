import Button from "@/pages/components/Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button", () => {
  it("should render with provided children content", () => {
    const { getByText } = render(
      <Button onClick={() => {}} disabled={false}>
        Click me!
      </Button>
    );
    expect(getByText("Click me!")).toBeInTheDocument();
  });

  it("should not trigger onClick when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled={true}>
        Click me!
      </Button>
    );
    fireEvent.click(getByText("Click me!"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should call onClick handler when button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled={false}>
        Click me!
      </Button>
    );
    fireEvent.click(getByText("Click me!"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should handle multiple rapid clicks", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClick} disabled={false}>
        Click me!
      </Button>
    );
    fireEvent.click(getByRole("button"));
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
