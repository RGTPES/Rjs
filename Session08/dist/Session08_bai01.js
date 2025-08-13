"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "thu2";
    weekDays["Tuesday"] = "thu3";
    weekDays["Wednesday"] = "thu4";
    weekDays["Thursday"] = "thu5";
    weekDays["Friday"] = "thu6";
    weekDays["Saturday"] = "thu7";
    weekDays["Sunday"] = "chu nhat";
})(weekDays || (weekDays = {}));
function printEnumValues(enumObj) {
    Object.values(enumObj).forEach((value) => console.log(value));
}
printEnumValues(weekDays);
