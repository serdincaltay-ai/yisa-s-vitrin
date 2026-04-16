import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("filters falsy values and joins class names", () => {
    expect(cn("px-4", false, undefined, "py-2")).toBe("px-4 py-2");
  });
});
