"use strict";
const UnionType = (value) => {
    if (typeof value === "string") {
        console.log(`so tu: `, value.length);
    }
    else {
        if (value % 2 === 0) {
            console.log(`day la so chan: `);
        }
        else {
            console.log(`day la so le: `);
        }
    }
};
