// plik scripts.js

var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

// triangle area script

var a = prompt('Podaj długość podstawy trójkąta'),
	h = prompt('Podaj wysokość trójkąta'),
	triangleArea = a*h/2;
alert('Pole trójkąta o podstawie: ' + a + ' i wysokości: ' + h + ' wynosi: ' + triangleArea)
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

// value plus-or-minus script

var a = prompt('podaj wartość a'),
    b = prompt('podaj wartość b'),
    value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik to ' + value);

if (value > 0) {
  console.log('Wynik jest dodatni');
  alert('Wynik jest dodatni');

} else if (value < 0) {
  console.log('Wynik jest ujemny');
  alert('Wynik jest ujemny');

} else {
  console.log('Zero');
  alert('Zero');
}