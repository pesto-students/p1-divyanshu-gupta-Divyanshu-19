// This functions take a string and returns a map with word
// count of each letter

function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for (let i = 0; i < str.length; i++) {
        const element = str[i].toLowerCase();
        // If element is present in map increase count else set new key with count 1
        if(isVowel(element)){
            if(vowelMap.has(element))
                vowelMap.set(element, vowelMap.get(element)+1)
            else
                vowelMap.set(element, 1);
        }
    }
    return vowelMap
}


console.log(vowelCount("AbcaDEe"))