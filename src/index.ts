import * as os from "os";
import readline from "readline";

export function getTextWidth(text: string): number {
  return [...text].reduce((sum: number, char: string) => {
    const charCode = char.charCodeAt(0);
    if (
      (charCode >= 0x00 && charCode < 0x81) ||
      charCode === 0xf8f0 ||
      (charCode >= 0xff61 && charCode < 0xffa0) ||
      (charCode >= 0xf8f1 && charCode < 0xf8f4)
    ) {
      return sum + 1;
    }
    return sum + 2;
  }, 0);
}

export function paddingLeft(
  text: string,
  width: number,
  padChar = " "
): string {
  return padding(text, width, padChar, (text, padText) => padText + text);
}

export function paddingRight(
  text: string,
  width: number,
  padChar = " "
): string {
  return padding(text, width, padChar, (text, padText) => text + padText);
}

function padding(
  text: string,
  width: number,
  padChar: string,
  resultTextFunc: (text: string, padText: string) => string
) {
  const textWidth = getTextWidth(text);
  if (textWidth >= width) {
    return text;
  }
  return resultTextFunc(text, padChar.repeat(width - textWidth));
}

class ConsoleClass {
  previousLogWidth: number;

  constructor() {
    this.previousLogWidth = 0;
  }

  print(text: string): void {
    readline.cursorTo(process.stdout, 0);
    const outText = paddingRight(text, this.previousLogWidth);
    process.stdout.write(outText);
    this.previousLogWidth = getTextWidth(text);
  }

  printLine(text: string): void {
    readline.cursorTo(process.stdout, 0);
    const outText = paddingRight(text, this.previousLogWidth);
    process.stdout.write(outText + os.EOL);
    this.previousLogWidth = 0;
  }

  printError(text: string): void {
    readline.cursorTo(process.stdout, 0);
    const outText = paddingRight(text, this.previousLogWidth);
    process.stderr.write(outText);
    this.previousLogWidth = getTextWidth(text);
  }

  printErrorLine(text: string): void {
    readline.cursorTo(process.stdout, 0);
    const outText = paddingRight(text, this.previousLogWidth);
    process.stderr.write(outText + os.EOL);
    this.previousLogWidth = 0;
  }
}

export const Console = new ConsoleClass();
