const partialUpdate = <T>(obj1: T, newObj: Partial<T>): T => {
    return { ...obj1, ...newObj };
};
