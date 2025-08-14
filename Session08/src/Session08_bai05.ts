const findFirstEven = <T extends number>(
    arr: T[],
    predicate: (value: T) => boolean
): T | undefined => arr.find(item => item % 2 === 0 && predicate(item));
