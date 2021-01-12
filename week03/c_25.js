function rev_sides(arg) {
    let reversed = "";
    let trimmed = "";
    let firstLetter = "";
    let lastLetter = "";

    if (arg > 2) {
        for (let i = 0; i < arg.length; i++) {
            trimmed += arg[i]; // no firs and last letter
            firstLetter = arg[0]; // frist letter
            lastLetter = arg[i]; // last letter
        }

        reversed = lastLetter + trimmed.slice(1, -1) + firstLetter;
        console.log(reversed);
    } else {
        console.log(arg);
    }
};

rev_sides("abc");
rev_sides("ac");
rev_sides("a");