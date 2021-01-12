const str_capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
};

console.log(str_capitalize("JavaScript"));
