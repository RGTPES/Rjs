enum weekDays{
    Monday = "thu2",
    Tuesday = "thu3",
    Wednesday = "thu4",
    Thursday = "thu5",
    Friday = "thu6",
    Saturday = "thu7",
    Sunday = "chu nhat"

}
function printEnumValues<T extends object>(enumObj: T) {
    Object.values(enumObj).forEach((value) => console.log(value));
}

printEnumValues(weekDays);


