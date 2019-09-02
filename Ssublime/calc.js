
function getNumber(num){
		var inputVar = document.getElementById("input");
		switch (num) {
			case 1:
			inputVar.value += 1;
				break;
			case 2:
			inputVar.value += 2;
				break;
			case 3:
				inputVar.value += 3;
				break; 
		  	case 4:
				inputVar.value += 4;
				break;
			case 5:
				inputVar.value += 5;
				break;
			case 6:
				inputVar.value += 6;
				break;
			case 7:
				inputVar.value += 7;
				break;
			case 8:
				inputVar.value += 8;
				break;	
			case 9:
				inputVar.value += 9;
				break;
			case 0:
				inputVar.value += 0;
				break;
				}
}
function point(){
	var inputVar = document.getElementById("input");
	inputVar.value = inputVar.value + '.';
}

function getOperand(num){
	var inputVar = document.getElementById("input");
	var outputVar = document.getElementById("output");
	switch(num) {
		case"-":
		inputVar.value += "-";
		break;
		case"+":
		inputVar.value += "+";
		break;
		case"/":
		inputVar.value += "/";
		break;
		case"*":
		inputVar.value += "*";
		break;
		case"=":
		inputVar.value += "=";
		break;
		case"CB":
		inputVar.value += ")";
		break;
		case"OB":
		inputVar.value += "(";
		break;
		case 'AS':
		inputVar.value = '-' + inputVar.value;
		break;
	}
}
function squareRoot(){
	var inputVar = document.getElementById("input");
	var outputVar = document.getElementById("output");
		if (inputVar.value != ""){
			outputVar.value =   Math.sqrt(inputVar.value);
		}
		else if(outputVar.value >= 0){
		outputVar.value =   Math.sqrt(outputVar.value);
		}
}
function square(){

	var inputVar = document.getElementById("input");
	var outputVar = document.getElementById("output");
		if (inputVar.value != ""){
			outputVar.value =   Math.pow(inputVar.value, 2);
		}
		else if(outputVar.value >= 0){
		outputVar.value =   Math.pow(outputVar.value, 2);
		}
		clearInput();
}

function clearAll() {
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
}
function clearInput(){
	document.getElementById("input").value = ""
}
function getAns(ans){
		document.getElementById("input").value = document.getElementById("output").value;	
}
function backSpace(){
	var inputVar = document.getElementById("input");
	var x = inputVar.value;
	if (x.length > 0){
		x = x.substring(0, x.length-1);
		inputVar.value = x;
	} 

}
function equalsTo(){

	var inputVar = document.getElementById("input");
	var outputVar = document.getElementById("output");
	//alert("There is an error")
	var string = inputVar.value;
	var regEx2 = /[a-zA-Z]/; // any alphabet
	const alphabet = regEx2.test(string);
	if (alphabet){
		alert("there is an error in your expression");
	}
	else {
	outputVar.value = eval(inputVar.value);
	clearInput();
	}  
}
