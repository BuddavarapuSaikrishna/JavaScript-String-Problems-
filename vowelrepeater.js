// Vowel Repeater

/* Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keeps its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.

1. repeatVowels("hello world") should return "helloo wooorld".
Waiting:2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
Waiting:3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
Waiting:4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".
*/


function repeatVowels(str) {
    const vowels = "aeiouAEIOU"
    let count = 0
    let my = ""

    for(let val of str){
       if (vowels.includes(val)){
           
          my += val
          my += val.toLowerCase().repeat(count)
          count += 1
       }else{
          my += val
       }

    }

    return my
}


repeatVowels("hello world")
repeatVowels("AEIOU")
repeatVowels("I like eating ice cream in Iceland")