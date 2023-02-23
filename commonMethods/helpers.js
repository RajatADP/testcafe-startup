import { t } from "testcafe";

export async function verifyTextSimilarity(element, text) {
  await t.expect(element.innerText).contains(text);
}
