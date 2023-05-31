function decimalToBinary(a){
  let binary = "";
  while (a > 0) {
    binary = (a % 2) + binary;
    a = Math.floor(a / 2);
  }
	return a;
}
