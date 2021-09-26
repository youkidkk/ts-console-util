import { Console } from "#/index";
import * as os from "os";
import readline from "readline";

jest.spyOn(readline, "cursorTo");
jest.spyOn(process.stdout, "write");
jest.spyOn(process.stderr, "write");

describe("print", (): void => {
  test("基本", (): void => {
    Console.print("あいうえお");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stdout.write).toBeCalledWith("あいうえお");
    expect(Console.previousLogWidth).toBe(10);
  });
  test("パディング", (): void => {
    Console.previousLogWidth = 10;
    Console.print("あいう");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stdout.write).toBeCalledWith("あいう    ");
    expect(Console.previousLogWidth).toBe(6);
  });
});

describe("printLine", (): void => {
  test("基本", (): void => {
    Console.printLine("あいうえお");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stdout.write).toBeCalledWith("あいうえお" + os.EOL);
    expect(Console.previousLogWidth).toBe(0);
  });
  test("パディング", (): void => {
    Console.previousLogWidth = 10;
    Console.printLine("あいう");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stdout.write).toBeCalledWith("あいう    " + os.EOL);
    expect(Console.previousLogWidth).toBe(0);
  });
});

describe("printError", (): void => {
  test("基本", (): void => {
    Console.printError("あいうえお");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stderr.write).toBeCalledWith("あいうえお");
    expect(Console.previousLogWidth).toBe(10);
  });
  test("パディング", (): void => {
    Console.previousLogWidth = 10;
    Console.printError("あいう");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stderr.write).toBeCalledWith("あいう    ");
    expect(Console.previousLogWidth).toBe(6);
  });
});

describe("printErrorLine", (): void => {
  test("基本", (): void => {
    Console.printErrorLine("あいうえお");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stderr.write).toBeCalledWith("あいうえお" + os.EOL);
    expect(Console.previousLogWidth).toBe(0);
  });
  test("パディング", (): void => {
    Console.previousLogWidth = 10;
    Console.printErrorLine("あいう");
    expect(readline.cursorTo).toBeCalledWith(process.stdout, 0);
    expect(process.stderr.write).toBeCalledWith("あいう    " + os.EOL);
    expect(Console.previousLogWidth).toBe(0);
  });
});
