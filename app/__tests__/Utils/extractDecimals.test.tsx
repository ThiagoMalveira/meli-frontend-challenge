import extractDecimals from "@/utils/extractDecimals";

describe("Extract Decimals", () => {
  it("should return empty string if input is NaN", () => {
    const result = extractDecimals(NaN);
    expect(result).toBe("");
  });

  it("should extract decimal part correctly when price has two decimal places", () => {
    const result = extractDecimals(123.45);
    expect(result).toBe("45");
  });
});
