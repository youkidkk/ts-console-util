"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingRight = exports.paddingLeft = exports.getTextWidth = void 0;
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
//# sourceMappingURL=index.js.map