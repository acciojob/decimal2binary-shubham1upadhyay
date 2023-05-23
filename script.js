function decimalToBinary() {
  let a = document.getElementById("decimal").value;
  let binary = "";
  while (a > 0) {
    binary = (a % 2) + binary;
    a = Math.floor(a / 2);
  }
	document.getElementById("ans").innerHTML = binary;
}
