function getDecodedCharacter(char){
  if(char>=65&&char<=91)
    {
      let r = char-13;
      if(r<65)
        r+=26;
    return String.fromCharCode(r);
    }
    return String.fromCharCode(char);
}
function rot13(str) { // LBH QVQ VG!
  let encoded = [...str];
  let decoded = encoded.reduce((result,char,index)=>{
    if(index==1){
      return getDecodedCharacter(result.charCodeAt(0))+getDecodedCharacter(char.charCodeAt(0));
    }
    return result+getDecodedCharacter(char.charCodeAt(0));
  });
    return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");
