import { verifyTextSimilarity } from "../commonMethods/helpers";
import HomePage from "../pages/homePage";

let homePage;

fixture`First Fixture`.meta("suite", "smoke").page`./example`
  .before(async (t) => {
    homePage = new HomePage();
    // test setup
    // seed test data
  })
  .after(async (t) => {
    //clean data
  });

test("Click a button", async (t) => {
  await t.typeText(homePage.devName, "raj");
  await t.click(homePage.btn);
  verifyTextSimilarity(homePage.header, "raj");
}).disablePageCaching;
