// create ShiftCipher class
class ShiftCipher {
  constructor(num) {
    this.shiftNum = num;
  }
  encrypt(string) {
    string = string.toLowerCase();
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      //if is a lowerase letter
      if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
      // shift by 2
      let shiftedChar = (string.charCodeAt(i) + this.shiftNum);
        // wrap char around wile greater than z
        while (shiftedChar > 122) {
          let amountToShift = shiftedChar - 122;
          shiftedChar = 97 + (amountToShift - 1);
        }
        // convert to letter and add to array
        newString += String.fromCharCode(shiftedChar);
      } else {
        newString += String.fromCharCode(string.charCodeAt(i));
      }
    }
    return newString.toUpperCase();
  }
  decrypt(string) {
    string = string.toLowerCase();
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      //if is a lowerase letter
      if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
      // shift by 2
      let shiftedChar = (string.charCodeAt(i) - this.shiftNum);
        // wrap char around wile greater than z
        while (shiftedChar < 97) {
          let amountToShift = 97 - shiftedChar;
          shiftedChar = 122 - (amountToShift - 1);
        }
        // convert to letter and add to array
        newString += String.fromCharCode(shiftedChar);
      } else {
        newString += String.fromCharCode(string.charCodeAt(i));
      }
    }
    return newString;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
