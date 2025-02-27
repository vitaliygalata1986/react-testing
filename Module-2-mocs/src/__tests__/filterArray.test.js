import {
  basketWithNoQuantity,
  filteredBasketWithQuantityOnly,
} from '../__mocks__/basket.mock.js';

import { filterArray } from '../filterArray.js';

const cb = jest.fn(); // создаем фейк коллбэк

describe('filterArray', () => {
  // afterEach после каждого тестового кейса
  afterEach(() => {
    jest.clearAllMocks(); // очистим все моки
  });

  // мы проверяем, что функция будет вызываться ровно столько раз, сколько длина массива
  it('should invoke provided function as many time as the length of an array', () => {
    // const cb = jest.fn();
    const arr = [1, 2, 3];
    filterArray(arr, cb);
    expect(cb).toHaveBeenCalledTimes(arr.length); // toHaveBeenCalledTimes - мы проверяем, что коллбэк был вызван ровно столько раз, сколько длина массива
  });

  // не следует вызывать коллбэк-функцию, если массив пуст
  // тоесть наш коллбэк не должен быть вызван
  // нужно посчитать сколько раз мы вызываем коллбэк
  it('should not invoke callback when an array is empty', () => {
    // const cb = jest.fn(); // создаем фейк коллбэк
    filterArray([], cb); // передаем пустой массив и фейк коллбэк

    // фейк коллбэк не должен быть вызван
    // тоесть мы проверяем, что коллбэк не был вызван
    expect(cb).not.toHaveBeenCalled();

    // а здесь мы наоборот проверяем что коллбэк был вызван хотя бы один раз
    // expect(cb).toHaveBeenCalled();
  });

  //следует отфильтровать массив, используя предоставленный предикат
  it('should filter an array using provided predicate', () => {
    const hasQuantity = (order) => order.qty > 0; // создается предикат-функция hasQuantity, которая возвращает true, если qty > 0, иначе false
    const result = filterArray(basketWithNoQuantity, hasQuantity); // filterArray фильтрует basketWithNoQuantity с помощью hasQuantity. В result попадает массив товаров без нулевого количества.
    // console.log(result);
    /*
        [
      { id: 1, title: 'Product A', price: 1000, qty: 2 },
      { id: 3, title: 'Product C', price: 1200, qty: 1 },
      { id: 5, title: 'Product E', price: 1400, qty: 3 },
      { id: 6, title: 'Product F', price: 1500, qty: 1 }
    ]
    */
    expect(result).toEqual(filteredBasketWithQuantityOnly); // Проверяем, что result совпадает с filteredBasketWithQuantityOnly
    // Если да, значит фильтр работает правильно, и тест пройдет.
  });
});

/*
    expect(cb).not.toHaveBeenCalled(); — это утверждение (assertion) в Jest, которое проверяет, 
    что переданная функция (cb) не была вызвана во время выполнения теста.
*/
