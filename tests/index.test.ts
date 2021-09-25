import * as target from "#/index";

describe("getTextWidth", (): void => {
  test("半角文字列のみ", (): void => {
    const result = target.getTextWidth("12345");
    expect(result).toBe(5);
  });
  test("全角文字列のみ", (): void => {
    const result = target.getTextWidth("１２３４５");
    expect(result).toBe(10);
  });
  test("半角・全角混在", (): void => {
    const result = target.getTextWidth("1１2２3３4４5５");
    expect(result).toBe(15);
  });
});

describe("paddingLeft", (): void => {
  const text = "1１2２3３";
  test("width が text長より小さい", (): void => {
    const result = target.paddingLeft("1１2２3３", 8);
    expect(result).toBe(text);
  });
  test("width が text長に等しい", (): void => {
    const result = target.paddingLeft("1１2２3３", 9);
    expect(result).toBe(text);
  });
  test("width が text長より大きい", (): void => {
    const result = target.paddingLeft("1１2２3３", 10);
    expect(result).toBe(" " + text);
  });
  test("padChar を指定", (): void => {
    const result = target.paddingLeft("1１2２3３", 12, "a");
    expect(result).toBe("aaa" + text);
  });
});

describe("paddingRight", (): void => {
  const text = "1１2２3３";
  test("width が text長より小さい", (): void => {
    const result = target.paddingRight("1１2２3３", 8);
    expect(result).toBe(text);
  });
  test("width が text長に等しい", (): void => {
    const result = target.paddingRight("1１2２3３", 9);
    expect(result).toBe(text);
  });
  test("width が text長より大きい", (): void => {
    const result = target.paddingRight("1１2２3３", 10);
    expect(result).toBe(text + " ");
  });
  test("padChar を指定", (): void => {
    const result = target.paddingRight("1１2２3３", 12, "a");
    expect(result).toBe(text + "aaa");
  });
});
