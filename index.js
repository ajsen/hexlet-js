import _ from 'lodash';

const getHelloMessage = (str) => `Hello, ${str}!`;
const getLastElement = (arr) => _.last(arr);

getHelloMessage('Hexlet');
getLastElement(['one', 'two']);
