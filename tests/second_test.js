import { Selector } from "testcafe";
import { verifyTextSimilarity } from "../commonMethods/helpers";

const devName = Selector("#developer-name");
const btn = Selector("#submit-button");
const header = Selector("#article-header");

const dataSet = require("../dataDriven/data.json");

fixture`Second Fixture`.meta("suite", "regression").page`./example`
  .before(async (t) => {
    // set data
  })
  .after(async (t) => {
    //clean data
  });

dataSet.forEach((data) => {
  test("Click a button", async (t) => {
    await t.typeText(devName, data.name);
    await t.click(btn);
    verifyTextSimilarity(header, data.name);
  }).disablePageCaching;
});
