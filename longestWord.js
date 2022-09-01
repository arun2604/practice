var input = "abc12&bd3&+@))hjskf";
let removePunctuation = input.replace(/[ 0-9'!"#$%&\'()*+,-.:;<=>?@\\^_`{|}~ ]/g,' ').trim();
var punctuationLess= removePunctuation.split(' ');
var largest = '';

for(let i = 0 ; i < punctuationLess.length;i++){
    if(punctuationLess[i].length > largest.length){
        largest = punctuationLess[i]
    }
}
console.log(largest)
