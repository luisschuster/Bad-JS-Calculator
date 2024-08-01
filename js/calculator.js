document.getElementById("button").addEventListener("click", hmm)

function hmm() {
    let getA = parseFloat(document.getElementById("text-input1").value);
    let getB = parseFloat(document.getElementById("text-input2").value);
    let operationsm = document.getElementById("operations").value;
    console.log(operationsm);

    if (isNaN(getA && getB)){
        document.getElementById("result").value = "Enter a number.";
    }
    else if (operationsm === "addition") {
        add();
    }
    else if (operationsm === "subtraction"){
        sub();
    }
    else if (operationsm === "multiplication"){
        mul();
    }
    else {
        div();
    }
}

function add() {
    let getA = parseFloat(document.getElementById("text-input1").value);
    let getB = parseFloat(document.getElementById("text-input2").value);
    console.log(getA, getB);
    let res = getA + getB;
    console.log(res);
    document.getElementById("result").value = res;
}

function sub() {
    // he's just like me fr :skull:
    let getA = parseFloat(document.getElementById("text-input1").value);
    let getB = parseFloat(document.getElementById("text-input2").value);
    console.log(getA, getB);
    let res = getA - getB;
    console.log(res);
    document.getElementById("result").value = res;
}

function mul() {
    let getA = parseFloat(document.getElementById("text-input1").value);
    let getB = parseFloat(document.getElementById("text-input2").value);
    console.log(getA, getB);
    let res = getA * getB;
    console.log(res);
    document.getElementById("result").value = res;
}

function div() {
    let getA = parseFloat(document.getElementById("text-input1").value);
    let getB = parseFloat(document.getElementById("text-input2").value);
    console.log(getA, getB);
    let res = getA / getB;
    console.log(res);
    document.getElementById("result").value = res;
}