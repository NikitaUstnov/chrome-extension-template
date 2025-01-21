import "../assets/styles/main.scss";
import logger from "../utils/logger";

// Test injection
function test() {
  try {
    const testDiv = document.createElement("div");
    testDiv.classList.add("__ext-template-test");
    const testP = document.createElement("p");
    testP.innerText = "This is test paragraph";
    testDiv.append(testP);
    document.body.append(testDiv);
    console.log(document);
  } catch (error: any) {
    logger.log(`[Content script] test error: ${error.message}`);
  }
}

const bootstrap = async () => {
  try {
    logger.log("Content script loaded");
    test();
  } catch (error: any) {
    logger.log(`[Content script] bootstrap error: ${error.message}`);
  }
};

bootstrap();
