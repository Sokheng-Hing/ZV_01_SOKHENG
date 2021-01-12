function grade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
};

console.log(grade(99));
console.log(grade(89));
console.log(grade(72));
console.log(grade(60));
console.log(grade(59));
console.log(grade(25));
