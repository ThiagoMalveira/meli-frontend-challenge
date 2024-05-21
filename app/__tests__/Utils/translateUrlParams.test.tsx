import { translateUrlParam } from "@/utils/translateUrlParams";

describe("translateUrlParam", () => {
  it("should replace a single URL parameter when the key matches", () => {
    const url = "http://example.com/page?user={{userId}}";
    const params = { userId: "123" };
    const result = translateUrlParam(url, params);
    expect(result).toBe("http://example.com/page?user=123");
  });

  it("should replace multiple URL parameters when all keys match", () => {
    const url = "http://example.com/page?user={{userId}}&session={{sessionId}}";
    const params = { userId: "123", sessionId: "abc" };
    const result = translateUrlParam(url, params);
    expect(result).toBe("http://example.com/page?user=123&session=abc");
  });

  it("should return the original URL if no parameters need to be replaced", () => {
    const url = "http://example.com/page";
    const params = { userId: "123" };
    const result = translateUrlParam(url, params);
    expect(result).toBe("http://example.com/page");
  });

  it("should handle URLs with complex structures and multiple parameters", () => {
    const url =
      "http://example.com/page?user={{userId}}&info={{userInfo}}&session={{sessionId}}";
    const params = { userId: "123", userInfo: "name%20age", sessionId: "abc" };
    const result = translateUrlParam(url, params);
    expect(result).toBe(
      "http://example.com/page?user=123&info=name%20age&session=abc"
    );
  });

  it("should handle cases where the object key does not exist in the URL", () => {
    const url = "http://example.com/page";
    const params = { nonExistingKey: "value" };
    const result = translateUrlParam(url, params);
    expect(result).toBe("http://example.com/page");
  });

  it("should handle cases where the URL contains similar but non-matching patterns", () => {
    const url = "http://example.com/page?user={{userId}}&session={{sessionId}}";
    const params = { userIdentification: "123", sessionCode: "abc" };
    const result = translateUrlParam(url, params);
    expect(result).toBe(
      "http://example.com/page?user={{userId}}&session={{sessionId}}"
    );
  });

  // Correctly replace parameters when object values contain special characters
  it("should correctly replace parameters when object values contain special characters", () => {
    const url = "http://example.com/page?query={{searchQuery}}";
    const params = { searchQuery: "special%20characters%20like%20%25%26%23" };
    const result = translateUrlParam(url, params);
    expect(result).toBe(
      "http://example.com/page?query=special%20characters%20like%20%25%26%23"
    );
  });

  it("should handle empty strings for both URL and object without errors", () => {
    const url = "";
    const params = {};
    const result = translateUrlParam(url, params);
    expect(result).toBe("");
  });

  it("should evaluate performance with very large URLs and objects", () => {
    const largeString = new Array(10000).join("a");
    const url = `http://example.com/data?largeData={{largeData}}`;
    const params = { largeData: largeString };
    const result = translateUrlParam(url, params);
    expect(result).toBe(`http://example.com/data?largeData=${largeString}`);
  });

  it("should check behavior when object values are empty strings", () => {
    const url = "http://example.com/user={{userId}}";
    const params = { userId: "" };
    const result = translateUrlParam(url, params);
    expect(result).toBe("http://example.com/user=");
  });
});
