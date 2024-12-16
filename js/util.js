// util.js

// Функция для получения случайного числа в заданном диапазоне
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для получения случайного элемента из массива
export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Функция для проверки длины строки
export function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом
export function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}
