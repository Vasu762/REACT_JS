let word = "programming";
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];
    if ('aeiouAEIOU'.includes(currentChar)) {
        vowelCount++;
    }
}

console.log("Number of vowels:", vowelCount);
