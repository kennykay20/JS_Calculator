const display = document.getElementById('display');

function appendToDisplay(input){
  display.value += input;
}

const clearDisplay = () => {
  display.value = "";
}

const calculateInput1 = () => {
  try
  {
    display.value = eval(display.value);
  }
  catch(error)
  {
    display.value = "Error " + error.message;
  }
}
