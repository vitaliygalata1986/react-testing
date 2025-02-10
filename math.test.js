import { multiply, divide, sum } from './math';

describe('math', () => {
  // создадим еще один describe, чтобы при выводе результатов тестирования они были в отдельном блоке
  describe.skip('multiply', () => {
    it('should multiply positive numbers', () => {
      const expectedResult = 6;
      const actualResults = multiply(3, 2);
      expect(actualResults).toBe(expectedResult);
    });
    it('should multiply negative numbers', () => {
      const res = multiply(-3, -2);
      expect(res).toBe(6);
    });
    it('should multiply negative and positive numbers', () => {
      const res = multiply(3, -2);
      expect(res).toBe(-6);
    });
  });

  describe.skip('sum', () => {
    it('should sum 2 digits', () => {
      const expectedResult = 10;

      const result = sum(7, 3);

      expect(result).toBe(expectedResult);
    });
  });

  describe.skip('divide', () => {
    it('should return Infinity dividing by 0', () => {
      const expectedResult = NaN;

      const result = divide(7 / 0);

      expect(result).toBe(expectedResult);
    });
  });

  describe.skip('divide', () => {
    it.skip('should return Infinity dividing by 0', () => {
      const expectedResult = NaN;

      const result = divide(7 / 0);

      expect(result).toBe(expectedResult);
    });

    it.only('should return Infinity dividing by 0', () => {
      const expectedResult = NaN;

      const result = divide(7 / 0);

      expect(result).toBe(expectedResult);
    });

    it.only('should return Infinity dividing by 0', () => {
      const expectedResult = NaN;

      const result = divide(7 / 0);

      expect(result).toBe(expectedResult);
    });
  });

  describe('divide', () => {
    // inputA, inputB - переменные
    it.each([
      { inputA: 6, inputB: 3, expected: 2 }, // первый тест кейс
      { inputA: 12, inputB: 3, expected: 4 },
      { inputA: 100, inputB: 10, expected: 10 },
      { inputA: 10, inputB: 0, expected: Infinity },
    ])(
      'should $inputA divided to $inputB equals $expected',
      ({ inputA, inputB, expected }) => {
        const result = divide(inputA, inputB);

        expect(result).toBe(expected);
      }
    );
  });
});
