const findDif = (s, t) => {
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if(!count[char]) {
            return char;
        }
        count[char]--;
    }
}

console.log(findDif('asdaafgt', 'adftgaasr'));