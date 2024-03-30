function reverseSentenceAndWords(str) {
    return str
        .split(' ') 
        .map(word => word.split('').reverse().join('')) 
        .join(' '); 
}

const sentence = 'are you sure you want to';
console.log(reverseSentenceAndWords(sentence)); // Outputs: "era uoy erus uoy tnaw ot"
