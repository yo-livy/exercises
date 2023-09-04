const plusOne = (digits) => {
    let carry = 1;
    for (i = digits.length - 1; i >=0; i--) {
        digits[i] += carry;
        if (digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9,9]));
console.log(plusOne([1,9]));