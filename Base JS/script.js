import { myName, greet } from './modules/task1.js';
import { celsiusToFahrenheit } from './modules/task2.js';
import { gValue, calculateFallDistance } from './modules/task3.js';
import { calculateAverage } from './modules/task4.js';
import { concatStrings } from './modules/task5.js';

alert(greet(myName));
alert(celsiusToFahrenheit(6));
alert(calculateFallDistance(2));
alert(calculateAverage(17, 23, 40));
alert(concatStrings('Природа', 'спит'));
