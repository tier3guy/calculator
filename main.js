let clear = getElementById('clear');
let output = getElementById('calculation')
clear.addEventListener("click" , clearScreen);
function clearScreen() {
	output.innerHTML() = "";
}
