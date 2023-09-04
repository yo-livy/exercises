const repeatedSubstring = (s) => {
    return (s + s).indexOf(s, 1) !== s.length;
}

console.log(repeatedSubstring('hellohellohello'));
console.log(repeatedSubstring('sdfksjdfgd'));
console.log(repeatedSubstring('letleet'));