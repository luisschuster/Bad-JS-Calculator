const elmA = document.getElementById("text-input1");
const elmB = document.getElementById("text-input2");
const result = document.getElementById("result");
const operationsm = document.getElementById("operations");
const button = document.getElementById("button");

button.onclick = hmm;

function hmm() {

    if (isNaN(parseFloat(elmA.value) && parseFloat(elmB.value))) {
        document.getElementById("result").value = "Enter a number.";
        return;
    }

    const valA = parseFloat(elmA.value);
    const valB = parseFloat(elmB.value);

    switch (operationsm.value) {
        case "addition":
            add(valA, valB);
            break;
        case "subtraction":
            sub(valA, valB);
            break;
        case "multiplication":
            mul(valA, valB);
            break;
        case "division":
            div(valA, valB);
            break;
    }

}

function add(valA, valB) {
    const res = valA + valB;
    result.value = res;
}

function sub(valA, valB) {
    const res = valA - valB;
    result.value = res;
}

function mul(valA, valB) {
    const res = valA * valB;
    result.value = res;
}

function div(valA, valB) {
    if (valB === 0) {
        const res = "Not allowed.";
        result.value = res;
    }
    else {
        const res = valA / valB;
        result.value = res;
    }
}
