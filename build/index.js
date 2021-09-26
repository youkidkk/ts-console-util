"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = exports.paddingRight = exports.paddingLeft = exports.getTextWidth = void 0;
const os = __importStar(require("os"));
const readline_1 = __importDefault(require("readline"));
function getTextWidth(text) {
    return [...text].reduce((sum, char) => {
        const charCode = char.charCodeAt(0);
        if ((charCode >= 0x00 && charCode < 0x81) ||
            charCode === 0xf8f0 ||
            (charCode >= 0xff61 && charCode < 0xffa0) ||
            (charCode >= 0xf8f1 && charCode < 0xf8f4)) {
            return sum + 1;
        }
        return sum + 2;
    }, 0);
}
exports.getTextWidth = getTextWidth;
function paddingLeft(text, width, padChar = " ") {
    return padding(text, width, padChar, (text, padText) => padText + text);
}
exports.paddingLeft = paddingLeft;
function paddingRight(text, width, padChar = " ") {
    return padding(text, width, padChar, (text, padText) => text + padText);
}
exports.paddingRight = paddingRight;
function padding(text, width, padChar, resultTextFunc) {
    const textWidth = getTextWidth(text);
    if (textWidth >= width) {
        return text;
    }
    return resultTextFunc(text, padChar.repeat(width - textWidth));
}
class ConsoleClass {
    constructor() {
        this.previousLogWidth = 0;
    }
    print(text) {
        readline_1.default.cursorTo(process.stdout, 0);
        const outText = paddingRight(text, this.previousLogWidth);
        process.stdout.write(outText);
        this.previousLogWidth = getTextWidth(text);
    }
    printLine(text) {
        readline_1.default.cursorTo(process.stdout, 0);
        const outText = paddingRight(text, this.previousLogWidth);
        process.stdout.write(outText + os.EOL);
        this.previousLogWidth = 0;
    }
    printError(text) {
        readline_1.default.cursorTo(process.stdout, 0);
        const outText = paddingRight(text, this.previousLogWidth);
        process.stderr.write(outText);
        this.previousLogWidth = getTextWidth(text);
    }
    printErrorLine(text) {
        readline_1.default.cursorTo(process.stdout, 0);
        const outText = paddingRight(text, this.previousLogWidth);
        process.stderr.write(outText + os.EOL);
        this.previousLogWidth = 0;
    }
}
exports.Console = new ConsoleClass();
//# sourceMappingURL=index.js.map