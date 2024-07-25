
export const shuffle = (string) => {
    const array = [...string];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

export const getsRandomChar = (text) => {
    return text[Math.floor(Math.random() * text.length)];
  };
  
export function generatePassword(config){
    let result = "";
    let charToskip = 1;
   
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "01234567890";
  const SPECIALS = "!@#$%^&*()_-+=[]{}|;:'\",.<>?/\\"; //note escape characters
  let alphabet=LOWERCASE;
  result+=getsRandomChar(LOWERCASE);
  if(config.uppercase){
    alphabet +=UPPERCASE;
    result += getsRandomChar(UPPERCASE);
    charToskip++;
  }
  if(config.number){
    alphabet +=NUMBERS;
    result += getsRandomChar(NUMBERS);
    charToskip++;
  }
  if(config.specialchar){
    alphabet +=SPECIALS;
    result += getsRandomChar(SPECIALS);
    charToskip++;
  }
  for(let i=charToskip;i<Number(config.size);i++){
    result+=getsRandomChar(alphabet);  //follows order LC UC NUM SPECIAL LC UC NUM SP
  }

    return shuffle(result).join("");
}