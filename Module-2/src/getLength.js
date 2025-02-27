/*
  Использует array.pop(), который удаляет последний элемент массива и возвращает его.
  Если array.pop() возвращает undefined (значит, массив пустой), функция возвращает 0.
  Иначе прибавляет 1 и рекурсивно вызывает себя.
*/

export function getLength(array) {
  if (array.pop() === undefined) return 0;

  return 1 + getLength(array);
}
