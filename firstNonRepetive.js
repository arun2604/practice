let str = 'arunkumar';
let char = str.split('');
let nonRepetives = [];

for(let i = 0;i<char.length;i++){
    if(char.indexOf(char[i])==char.lastIndexOf(char[i])){
        nonRepetives.push(char[i])
    }
}
console.log(nonRepetives[0]);
