
const display=document.getElementById("display");

function appendToDisplay(input){
	
	display.value+=input;
}
function calculate(){
	try{
	display.value=eval(display.value);
	}
	catch(error){
		display.value+="Error";
}

}

function clearDisplay(){
	display.value="";
}

function plusMinus(){
	if(display.value>0){
		display.value=display.value*-1;
}
else if(display.value<0){
		display.value=display.value*-1;
}
}
function clearLast(){
	display.value=display.value.slice(0,-1);
}