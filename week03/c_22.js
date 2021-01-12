function vowel_counter(text) {
    let listOfVowels = 'aeiouAEIOU';
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (listOfVowels.indexOf(text[i]) !== -1) { // aeiouAEIOU.indexOf(Hello || PHP) and !== -1;
            counter += 1; // add 1 to counter when condition triggered
        }
    }
    return console.log(counter);
};

vowel_counter("Hello");
vowel_counter("PHP");