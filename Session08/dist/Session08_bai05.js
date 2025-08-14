"use strict";
const findFirstEven = (arr, predicate) => arr.find(item => item % 2 === 0 && predicate(item));
