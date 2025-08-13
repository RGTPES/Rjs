const merge =<T,U>(arr1:T,arr2:U): T&U=>{
    return {...arr1,...arr2};
}