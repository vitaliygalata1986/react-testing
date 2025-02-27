import { getLength } from '../getLength';

/*
  Тест проверяет, что если передать пустой массив [], функция вернет 0.
*/

/*

describe('getLength', () => {
  it('should return 0 for an empty array', () => {
    const res = getLength([]);
    expect(res).toBe(0);
  });

  it('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);
    expect(res).toBe(3);
  });

  it('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});

*/

/*
describe('getLength', () => {
  describe('when the array is empty', () => {
    it('returns 0', () => {
      expect(getLength([])).toBe(0);
    });
  });

  describe.only('when the array has elements', () => {
    it('returns the correct length', () => {
      expect(getLength([1, 2, 3])).toBe(3);
    });
  });
});
*/

/*
describe('getLength', () => {
  it.only('should return 0 for an empty array', () => {
    const res = getLength([]);
    expect(res).toBe(0);
  });

  it('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);
    expect(res).toBe(3);
  });

  it.skip('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});
*/

/*
describe('getLength', () => {
  // it.todo('should return 0 for an empty array', () => {
  //   const res = getLength([]);
  //   expect(res).toBe(0);
  // });

  // it('should return 3 for an array with 3 elements', () => {
  //   const res = getLength([1, 2, 3]);
  //   expect(res).toBe(3);
  // });

  it.skip('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});
*/

describe('getLength', () => {
  // хуки обычно начинаются с before или after
  // beforeAll запустится один раз перед всеми тестами
  // из можно применить для работы с БД
  // например очистить БД перез началом работы
  // потом после всех тестов очистить
  describe('clear database', () => {
    beforeAll(() => {
      console.log('basic setupe');
    });

    // выполнить что либо перед каждым тестом
    beforeEach(() => {
      console.log('run setup for each test');
    });

    // выполнить что либо после каждого теста
    afterEach(() => {
      console.log('run cleanup for each test');
    });

    // afterAll запустится один раз после всех тестов
    afterAll(() => {
      console.log('clean up');
    });

    it('should return 0 for an empty array', () => {
      const res = getLength([]);
      expect(res).toBe(0);
    });
  });

  /*
  it.concurrent.skip('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);
    expect(res).toBe(3);
  });

  it.concurrent.skip('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });

  test('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });

  xit('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });

  fit('should return 3 for an array with 3 elements', () => {
    const res = getLength([1, 2, 3]);

    expect(res).toBe(3);
  });
    */

  test('should return 5 for an array with 5 elements', () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});
