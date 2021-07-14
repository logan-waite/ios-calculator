import Vue from "vue";
import Button from "../components/button";

describe("Button tests", () => {
  it("has a created hook", () => {
    expect(typeof Button.created).toBe("function");
  });
});
