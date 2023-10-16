const { capitalizedtext } = require("../index.js");
describe("Capitaized text", function () {
  it("Capitalized Whole word", () => {
    expect(capitalizedtext("test")).toBe("TEST");
  });
  it("Capitalized random letters", () => {
    expect(capitalizedtext("tEsT")).toBe("TEST");
  });
  it("Capitalized random letters", () => {
    expect(typeof capitalizedtext("test")).toBe("string");
  });
  it("Sting parameters", () => {
    expect(() => capitalizedtext(111)).toThrow();
  });
});
