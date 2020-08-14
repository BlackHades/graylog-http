"use strict";
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const Logger = require("../index");
const logger = new Logger({
  url: "http:://localhost:12201/gelf",
    host: "local.test",
    facility: "local.facility"
});

describe("GELF Test", () => {
    it('should send debug logs to graylog', async function () {
        const {error, data} = await logger.debug("THis is a log from graylog test", {
            another: "Logs",
            another2: "Logss"
        });
        assert.typeOf(error, 'undefined'); // without optional message
        assert.typeOf(data, 'number');
    });
});