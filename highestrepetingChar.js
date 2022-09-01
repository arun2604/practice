let input = 'Today is the greatest day ever';
let arr = input.toLowerCase().split(' ');

let charCount = 0;
let word = '';

for(let i=0;i<arr.length;i++){
    for(let j = 0; j < arr[i].length;j++){
        var countNew = 0;
        for(let k = j+1; k < arr[i].length;k++){
            if(arr[i][j] == arr[i][k]){
                countNew += 1;
            }
        }
        if (countNew > charCount){
            charCount = countNew;
            word = arr[i]
        }
    }
}
console.log(word)