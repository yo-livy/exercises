const validAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
        hash[t[i]] = (hash[t[i]] || 0) - 1;
    }
    if (!Object.values(hash).every(val => val === 0)) {
        return false;
    }
    return true;
}

console.log(validAnagram('hello', 'fgdsjdladkj'));
console.log((validAnagram('main', 'ainm')));
console.log(validAnagram('lion', 'leon'));