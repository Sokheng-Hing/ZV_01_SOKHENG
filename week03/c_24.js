function first_and_last(arg) {
    if (arg.length >= 3) {
        console.log(arg.slice(1, -1));
    } else if (arg.length >= 2) {
        console.log(arg);
    } else {
        console.log('');
    }
}

first_and_last("abc");
first_and_last("ac");
first_and_last("");