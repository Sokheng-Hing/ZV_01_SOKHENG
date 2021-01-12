function get_month_str(score) {
    let month;
    switch (score) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Invalid Month";
            break;
    }

    return month;
};

console.log(get_month_str(0));
console.log(get_month_str(1));
console.log(get_month_str(2));
console.log(get_month_str(3));
console.log(get_month_str(4));
console.log(get_month_str(5));
console.log(get_month_str(6));
console.log(get_month_str(7));
console.log(get_month_str(8));
console.log(get_month_str(9));
console.log(get_month_str(10));
console.log(get_month_str(11));
console.log(get_month_str(12));
console.log(get_month_str(13));
