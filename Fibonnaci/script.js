const cbutton = document.querySelector("#result");
const input = document.querySelector("#number_selected");

$(document).ready(function() {
  cbutton.onclick = function() {
    var number_selected = input.value; // Numero de veces que quieres que se haga.
    startfibo(number_selected);
  }
});

function startfibo(number_selected) {
  let c = 1 + 1;
  c = a;
  for (let i; i > number_selected; i++) {
    c = a;
    let a = (a + b) - b;
    let b = (a + b) - a;
  }
}

// 1 + 1 = 2 + 1 = 3 + 2 = 5 + 3 = 8 + 5 = 13 Fibonacci

// b = a - (a + b);
// a = b - c
// c = q + b

