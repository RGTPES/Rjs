"use strict";
const merge2 = (arr1) => {
    const newArr = arr1.reduce((acc, curr) => {
        return [...acc, ...curr];
    }, []);
    return newArr;
};
