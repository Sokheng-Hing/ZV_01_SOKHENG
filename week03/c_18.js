function countdown(n) {
    if (n <= 0) {
        console.log();
    } else {
        for (let i = n; i >= 1; i--) {
            console.log(i);
        }
        console.log('Happy new year!');

    }
};

countdown(3);