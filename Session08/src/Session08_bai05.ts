// function findFirstEven<T extends number>(
//     arr: T[],
//     predicate: (value: T) => boolean
// ): T | undefined {
//     return arr.find(item => item % 2 === 0 && predicate(item));
// }
const findFirstEven=<T extends number>(arr:T[], predicate:(value:T)=>boolean): T| undefined=>
    return Array.find(item => item %2 === 0&& predicate(item));

