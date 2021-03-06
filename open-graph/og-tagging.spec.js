import { describe, it, expect } from "vitest";
import {
  mockSource,
  mockType,
  taggingOutputInflearn,
  taggingOutputYoutube,
} from "./og-tagging-mock-data.js";
import {
  fireshipOgResult,
  inflearnOgResult
} from "./og-mock-data.js";
import tagger from "./og-tagging.js";

describe("getSource", () => {
  mockSource.forEach(([ogUrl, expected]) => {
    it(`if input is ${ogUrl} then getSource return ${expected}`, () => {
      expect(tagger.getSource({ ogUrl })).toBe(expected);
    });
  });
});

describe("getType", () => {
  mockType.forEach(([ogUrl, expected]) => {
    it(`if input is ${ogUrl} then getType return ${expected}`, () => {
      expect(tagger.getType({ ogUrl })).toBe(expected);
    });
  });
});

describe("fromOgToRowData", () => {
  it("input og result then return expected tagging result", () => {

    expect(tagger.fromOgToRowData(fireshipOgResult)).toStrictEqual(
      taggingOutputYoutube
    );
  });
  it("input inflearnOgResult then return expected tagging result", () => {
    expect(tagger.fromOgToRowData(inflearnOgResult)).toStrictEqual(
      taggingOutputInflearn
    );
  });
});
