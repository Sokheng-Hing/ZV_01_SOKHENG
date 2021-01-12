function highest(arg) {
    let toArray = Array[0];
    let eachNum;

    for (let i = 0; i < arg.length; i++) {
        toArray = arg.split(" ");
        // console.log(toArray[i]);
        toArray += String(toArray[i]);
        // if (arg[i] !== " ") {
        //     toArray = arg[i];
        //     toArray = Number(Math.max(toArray));
        //     console.log(toArray);

        // } else {
        //     // console.log(arg[i]);
        // }
    }
    console.log(toArray);
    // console.log(eachNum);

};

highest("1 2 3 18 4 5 9 7");
// highest("-1 -19 -3 -2 -5");