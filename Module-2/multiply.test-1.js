import { multiply } from './multiply';

/*
describe();
it('should ');
*/

/*
test('multiply', () => {
  // 1 - что проверяем, 2 - описываем тест кейсы
  const res = multiply(3, 2);

  expect(res).toBe(6); // для проверки используем функцию expect
});
*/

/*
describe('multiply', () => {
  // группирует тесты
  it('should multiply positive numbers', () => {
    const res = multiply(3, 2);
    expect(res).toBe(6);
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
*/

// expect - возвращает объект, у которого есть набор методов

describe.skip('multiply', () => {
  // группирует тесты
  it('should multiply positive numbers', () => {
    // AAA - arrange, act, assert
    // этап arrange:
    const expectedResult = 6;

    // этап act - тестируем функцию
    const actualResults = multiply(3, 2);

    // этап assert- утверждение
    // expect(actualResults).toBe(expectedResult);

    // expect({ a: 1 }).toBe({ a: 1 }); // failed

    // expect({ a: 1 }).toEqual({ a: 1 }); // passed -  toEqual используется для сравнения объектов и массивов по значению, а не по ссылке.

    // expect([1, 2, 3].length).toBe(3); // passed
    // но есть более предпочтительнее метод
    // expect([1, 2, 3]).toHaveLength(3); // passed

    // проверим – есть ли в массиве какое-то значение
    // expect([1, 2, 3]).toContain(3); // passed

    // В Jest not инвертирует (отрицает) условие утверждения.
    // тоесть 10 не входит в массив
    // expect([1, 2, 3]).not.toContain(10); // passed

    // ожидаем, что в качестве каких-то действий в переменной получим undefined
    // expect(undefined).toBe(undefined); // passed

    // есть более предпочтительнее вариант
    // expect(undefined).toBeUndefined(); // passed

    // тоже самое есть с null
    // expect(null).toBeNull(); // passed

    // ожидааем от переменной, что она не undefined
    // expect(actualResults).toBeDefined(); // passed

    // проверить, что переменная не пустая
    // expect(actualResults).toBeTruthy() //  проверяет, что значение истинное

    // toBeFalsy() проверяет, что значение является ложным.
    // expect(null).toBeFalsy();
  });
  it('should multiply negative numbers', () => {
    const res = multiply(-3, -2);
    // expect(res).toBe(6);
  });
  it('should multiply negative and positive numbers', () => {
    const res = multiply(3, -2);
    // expect(res).toBe(-6);
  });
});
