import { describe, it } from "mocha";
import {expect} from "chai"
import {rgbToHex, hexToRgb } from "../app/converter.js"

describe("Color Code Converter", () => {
  describe("RGB to Hex", () => {
    it("converts the basic colors", () => {
      var redHex = rgbToHex(255, 0, 0);
      var greenHex = rgbToHex(0, 255, 0);
      var blueHex = rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB", () => {
    it("converts the basic colors", () => {});
    var red = hexToRgb("ff0000");
    var green = hexToRgb("00ff00");
    var blue = hexToRgb("0000ff");

    expect(red).to.deep.equal([255, 0, 0]);
    expect(green).to.deep.equal([0, 255, 0]);
    expect(blue).to.deep.equal([0, 0, 255]);
  });
});
