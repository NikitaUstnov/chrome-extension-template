export abstract class Log {
  abstract log(message: any): void;
}

class Logger implements Log {
  private mode: string;

  constructor() {
    this.mode = import.meta.env.VITE_MODE || "development";
  }

  public log(message: any): void {
    if (this.mode === "development") {
      console.log("LOG: ", JSON.stringify(message));
    }
  }
}

export default new Logger();
