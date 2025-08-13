const merge2 =<T> (arr1:T[][]):T[] => {
    const newArr =arr1.reduce((acc,curr)=>{
        return [...acc,...curr ]
    },[])
    return newArr
};
