const mergeStrings = (word1, word2) => {
    result = '';
    let i = 0;
    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
        i++;
    }
    return result;
}

console.log(mergeStrings('abc', 'qrt'));
console.log(mergeStrings('npm', 'kmdfgt'));
console.log(mergeStrings('qwerty', 'dfg'));
