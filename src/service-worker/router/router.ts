import logger from "../../utils/logger";

export class Routing {
  /**
   * Can use this method for listening external
   * requests from "externally_connectable" apps
   */
  public initExternalRouting(): void {
    chrome.runtime.onMessageExternal.addListener(
      (request, sender, sendResponse) => {
        switch (request.command) {
          case "foo":
            sendResponse("bar");

            break;

          default:
            logger.log(
              `[Routing] External command unknown: ${request.command}`
            );
            break;
        }
      }
    );
    logger.log("External routing initialized");
  }

  /**
   * Use for listening internal messages form
   * content script
   */
  public initInternalRouting(): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      switch (request.command) {
        case "foo":
          sendResponse("bar");
          break;

        default:
          logger.log(`[Routing] Internal command unknown: ${request.command}`);
          break;
      }
    });
    logger.log("Internal routing initialized");
  }
}
