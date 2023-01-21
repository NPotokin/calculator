

// setting us variables
let input = document.querySelector(".inp");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clr");
let equal = document.querySelector(".eqv");

// writing logic for buttons

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.id;
        input.value += value;
    });
})

equal.addEventListener("click", (e) => {
    if(input.value === "") {
        input.value = "Start calculating"
    } else {
        let result = eval(input.value);
        input.value = result;
    }
     
})

clear.addEventListener("click", (e) => {
    input.value = "";
})
