function data_type(arg) {
    if (typeof arg === "number") {
        console.log("number");
    } else if (typeof arg === "string") {
        console.log("string");
    } else if (typeof arg === "boolean") {
        console.log("boolean");
    }
};

data_type(1);
data_type("1");
data_type(true);