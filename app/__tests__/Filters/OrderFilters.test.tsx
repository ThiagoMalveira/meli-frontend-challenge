import OrderFilter from "@/pages/components/Filters/OrderFilter";
import { fireEvent, render } from "@testing-library/react";

describe("OrderFilter", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <OrderFilter
        sort={[]}
        params={{ sort: "", price: "", searchTerm: "batata" }}
        updateSort={jest.fn()}
      />
    );
    expect(container).toBeTruthy();
  });

  it("should display all sort options", () => {
    const sortOptions = [
      { id: "1", name: "Price" },
      { id: "2", name: "Name" },
    ];
    const { getByRole } = render(
      <OrderFilter
        sort={sortOptions}
        params={{ sort: "", price: "", searchTerm: "batata" }}
        updateSort={jest.fn()}
      />
    );
    expect(getByRole("option", { name: "Price" })).toBeInTheDocument();
    expect(getByRole("option", { name: "Name" })).toBeInTheDocument();
  });

  it("should trigger updateSort on change", () => {
    const updateSortMock = jest.fn();
    const { getByRole } = render(
      <OrderFilter
        sort={[{ id: "1", name: "Price" }]}
        params={{ sort: "", price: "", searchTerm: "batata" }}
        updateSort={updateSortMock}
      />
    );
    fireEvent.change(getByRole("combobox"), { target: { value: "1" } });
    expect(updateSortMock).toHaveBeenCalledWith("1");
  });

  it("should disable the currently selected sort option", () => {
    const sortOptions = [{ id: "1", name: "Price" }];
    const { getByRole } = render(
      <OrderFilter
        sort={sortOptions}
        params={{ sort: "1", price: "", searchTerm: "batata" }}
        updateSort={jest.fn()}
      />
    );
    expect(getByRole("option", { name: "Price" })).toBeTruthy();
  });

  it("should not trigger change event when the disabled option is selected", () => {
    const updateSortMock = jest.fn();
    const { getByRole } = render(
      <OrderFilter
        sort={[{ id: "1", name: "Price" }]}
        params={{ sort: "1", price: "", searchTerm: "batata" }}
        updateSort={updateSortMock}
      />
    );
    fireEvent.change(getByRole("option"), { target: { value: "1" } });
    expect(updateSortMock).not.toHaveBeenCalled();
  });

  it("should ensure accessibility features like label association with select element are in place", () => {
    const { getByLabelText } = render(
      <OrderFilter
        sort={[{ id: "1", name: "Price" }]}
        params={{ sort: "", price: "", searchTerm: "batata" }}
        updateSort={jest.fn()}
      />
    );
    expect(getByLabelText(/ordenar por:/i)).toBeInTheDocument();
  });
});
