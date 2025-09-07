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