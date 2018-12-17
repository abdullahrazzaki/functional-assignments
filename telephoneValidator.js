function telephoneCheck(str) {
  var regex = /^(1\s*)?(\d{3}|\(\d{3}\))[ -]{0,1}\d{3}[ -]{0,1}\d{4}$/
  return regex.test(str);
}

telephoneCheck("555-555-5555");
