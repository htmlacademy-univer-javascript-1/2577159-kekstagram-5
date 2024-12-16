
function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}

// Функция для получения случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для получения случайного элемента из массива
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Функция для генерации комментариев
function generateComments(count) {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const names = ['Артём', 'Ольга', 'Иван', 'Мария', 'Дмитрий', 'Александра', 'Сергей', 'Анна', 'Екатерина', 'Николай'];

  const comments = [];

  for (let i = 0; i < count; i++) {
    comments.push({
      id: getRandomNumber(100, 999), // Уникальность ID комментариев не гарантируется, можно доработать при необходимости
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: Array.from({ length: getRandomNumber(1, 2) }, () => getRandomElement(messages)).join(' '),
      name: getRandomElement(names)
    });
  }

  return comments;
}

// Функция для генерации массива описаний фотографий
function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии №${i}`,
      likes: getRandomNumber(15, 200),
      comments: generateComments(getRandomNumber(0, 30))
    });
  }

  return photos;
}

const photoDescriptions = generatePhotos();
// console.log(photoDescriptions);

// Примеры тестирования функций
// console.log(isStringLengthValid('проверяемая строка', 20)); // true
// console.log(isStringLengthValid('проверяемая строка', 10)); // false
// console.log(isPalindrome('топот')); // true
// console.log(isPalindrome('ДовОд')); // true
// console.log(isPalindrome('Лёша на полке клопа нашёл')); // true
