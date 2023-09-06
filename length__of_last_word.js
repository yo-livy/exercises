const lastWord = (s) => {
    let trimmed = s.trim();
    if(!trimmed) return 0;
    let lastSpaceIndex = trimmed.lastIndexOf(' ');
    if(lastSpaceIndex === -1) return trimmed.length;
    return trimmed.length - lastSpaceIndex - 1;
}

console.log(lastWord('Hello World'));