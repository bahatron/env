import $env from "../src/index";
import { expect } from "chai";

describe("get", () => {
    it("given 0, it'll return string '0'", () => {
        process.env.var = "0";
        (<any>process.env).bar = 0;

        expect($env.get("var")).to.equal("0");
        expect($env.get("bar")).to.equal("0");
    });

    it("returns a default value if env is not set and was passed as second parameter", () => {
        delete process.env.var;

        let result = $env.get("var", "default_value");

        expect(result).to.equal("default_value");
    });

    it("throws an error if key does not exist and no default value was given", () => {
        delete process.env.var;

        expect(() => $env.get("var")).to.throw(Error);
    });
});
