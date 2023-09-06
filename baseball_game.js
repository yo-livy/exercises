const game = (operations) => {
    let stack = [];
    for(let op of operations){
        if(op === '+'){
            const score1 = stack.pop();
            const score2 = stack.pop();
            stack.push(score2, score1, score2 + score1); 
        }else if(op === 'D'){
            stack.push(2 * stack[stack.length - 1]);
        }else if(op === 'C'){
            stack.pop();
        }else{
            stack.push(parseInt(op));
        }
    }
    return stack.reduce((a,b) => a + b, 0);
}

console.log(game(["5","2","C","D","+"]));