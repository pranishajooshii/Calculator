let result = document.getElementById("inputText");

let calculate = (input) => {
    result.value += input;      
}
// take what its currently there and add this to that

let equal = () => {
    try {
        result.value = eval(result.value)
    } catch (e) {
        result.value = "Error";
    }
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}
