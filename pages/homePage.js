import { Selector } from "testcafe";

class HomePage {
  constructor() {
    this.devName = Selector("#developer-name");
    this.btn = Selector("#submit-button");
    this.header = Selector("#article-header");
  }
}

export default HomePage
