import logger from "../utils/logger";
import { Routing } from "./router/router";

const router = new Routing();

/**
 * Service worker bootstrap
 */
const bootstrap = async (): Promise<void> => {
  try {
    const { initExternalRouting, initInternalRouting } = router;

    initInternalRouting();
    initExternalRouting();

    logger.log("Service worker loaded");
  } catch (error: any) {
    logger.log("Service worker load error");
  }
};

// Test injection
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["src/inject-scripts/index.js"],
    });
  }
});

bootstrap();
