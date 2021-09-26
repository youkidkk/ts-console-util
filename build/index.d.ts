export declare function getTextWidth(text: string): number;
export declare function paddingLeft(text: string, width: number, padChar?: string): string;
export declare function paddingRight(text: string, width: number, padChar?: string): string;
declare class ConsoleClass {
    previousLogWidth: number;
    constructor();
    print(text: string): void;
    printLine(text: string): void;
    printError(text: string): void;
    printErrorLine(text: string): void;
}
export declare const Console: ConsoleClass;
export {};
//# sourceMappingURL=index.d.ts.map