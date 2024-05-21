import convertPrice from "@/utils/convertPrice";

describe("convertPrice", () => {
  it("should format price correctly for USD", () => {
    const result = convertPrice(100, "USD");
    expect(result).toEqual("$100.00");
  });

  it("should throw an error when price is NaN", () => {
    expect(() => convertPrice(NaN, "USD")).toThrow("Invalid price value");
  });

  it("should handle very large numbers for price", () => {
    const result = convertPrice(1e10, "USD");
    expect(result).toBe("$10,000,000,000.00");
  });

  it("should handle very small numbers for price, including zero", () => {
    const result = convertPrice(0.01, "USD");
    expect(result).toBe("$0.01");
    const zeroResult = convertPrice(0, "USD");
    expect(zeroResult).toBe("$0.00");
  });

  it("should handle negative price values", () => {
    const result = convertPrice(-100, "USD");
    expect(result).toBe("-$100.00");
  });

  it("should ensure function handles floating point precision correctly", () => {
    const result = convertPrice(0.123456789, "USD");
    expect(result).toBe("$0.12");
  });
});
