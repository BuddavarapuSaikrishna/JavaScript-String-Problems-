function isPangram(sentence, letters) {

  let arr = []
  sentence = sentence.toLowerCase();
  letters = letters.toLowerCase();
  for (let val of sentence){
    const charcode = val.charCodeAt()
    if (charcode >= 97 && charcode <= 122){
       arr.push(val)
    }
  }
  const myset = new Set(arr)
  arr = [...myset]
  sentence = arr.join("");
  if(sentence.length === letters.length){
    return true
  }else{
    return false
  }
}

isPangram("hello","helo")
isPangram("hello", "helow")
isPangram("freeCodeCamp", "frcdmp")