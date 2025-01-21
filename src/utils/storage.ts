import logger from "./logger";

class ChromeStorage {
  /**
   * Get some value from chrome storage
   * @param {string} key
   * @returns {Promise<any>}
   */
  public async get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, (result) => {
        if (chrome.runtime.lastError) {
          logger.log(`[ChromeStorage] get error: ${chrome.runtime.lastError}`);
          resolve(false);
        } else {
          resolve(result[key]);
        }
      });
    });
  }

  public async set(key: string, value: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [key]: value }, () => {
        if (chrome.runtime.lastError) {
          logger.log(`[ChromeStorage] set error: ${chrome.runtime.lastError}`);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}

export default new ChromeStorage();
