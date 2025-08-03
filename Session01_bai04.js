const check =(a) => {
    if (a %2 === 0) {
        console.log("Số chẵn");
    } else {
        console.log("Số lẻ");
    }
    if(isNaN(a)) {
        console.log("Đây không phải là một số");
    }


}
check(4);