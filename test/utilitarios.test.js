const Utilitarios = require("../src/utilitarios");

describe("Utilitarios", () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  test("inverterString", () => {
    expect(utils.inverterString("abc")).toBe("cba");
  });

  test("contarCaracteres", () => {
    expect(utils.contarCaracteres("abcde")).toBe(5);
  });

  test("paraMaiusculas e paraMinusculas", () => {
    expect(utils.paraMaiusculas("abc")).toBe("ABC");
    expect(utils.paraMinusculas("ABC")).toBe("abc");
  });

  test("primeiraLetraMaiuscula", () => {
    expect(utils.primeiraLetraMaiuscula("teste")).toBe("Teste");
  });

  test("somar, subtrair, multiplicar", () => {
    expect(utils.somar(2, 3)).toBe(5);
    expect(utils.subtrair(5, 3)).toBe(2);
    expect(utils.multiplicar(4, 3)).toBe(12);
  });

  test("dividir", () => {
    expect(utils.dividir(10, 2)).toBe(5);
    expect(() => utils.dividir(1, 0)).toThrow("Divisão por zero");
  });

  test("ehPar", () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  test("primeiroElemento e ultimoElemento", () => {
    const arr = [1, 2, 3];
    expect(utils.primeiroElemento(arr)).toBe(1);
    expect(utils.ultimoElemento(arr)).toBe(3);
  });

  test("tamanhoArray", () => {
    expect(utils.tamanhoArray([1, 2, 3, 4])).toBe(4);
  });

  test("ordenarArray e inverterArray", () => {
    const arr = [3, 1, 2];
    expect(utils.ordenarArray(arr)).toEqual([1, 2, 3]);
    expect(utils.inverterArray(arr)).toEqual([2, 1, 3]);
  });

  test("gerarNumeroAleatorio", () => {
    const n = utils.gerarNumeroAleatorio(10);
    expect(Number.isInteger(n)).toBe(true);
    expect(n).toBeGreaterThanOrEqual(0);
    expect(n).toBeLessThan(10);
  });

  test("ehNumero", () => {
    expect(utils.ehNumero(5)).toBe(true);
    expect(utils.ehNumero("5")).toBe(false);
    expect(utils.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos", () => {
    expect(utils.removerEspacos("  ola  ")).toBe("ola");
  });

  test("repetirTexto", () => {
    expect(utils.repetirTexto("ab", 3)).toBe("ababab");
  });

  test("juntarArray", () => {
    expect(utils.juntarArray(["a", "b", "c"]).toString()).toBe(["a", "b", "c"].join(","));
    expect(utils.juntarArray(["a", "b"], "-")).toBe("a-b");
  });

  test("contarPalavras", () => {
    expect(utils.contarPalavras("  ola   mundo ")).toBe(2);
  });

  test("mediaArray", () => {
    expect(utils.mediaArray([2, 4, 6])).toBe(4);
    expect(utils.mediaArray([])).toBe(0);
  });

  test("removerDuplicados", () => {
    expect(utils.removerDuplicados([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test("ehPalindromo", () => {
    expect(utils.ehPalindromo("arara")).toBe(true);
    expect(utils.ehPalindromo("Ame a ema")).toBe(true);
    expect(utils.ehPalindromo("teste")).toBe(false);
  });

  test("mesclarObjetos", () => {
    expect(utils.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});


