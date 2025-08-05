import {formatDate }from "./formatData.js";
const now = new Date();
const formattedDate = formatDate(now.toString());
console.log(formattedDate);