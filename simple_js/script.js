"use strict";

function raiseToPower() {
    var number = Number(prompt("Число, которое хотите возвести в степень", "1"));
    var power = Number(prompt("Степень", "1"));
    var result = 1;
    for(var i = 0; i < power; i++) {
        result *= number;
    }
    alert(result);
    if (result < 1000) {
        alert("Результат не очень");
    } else {
        alert("Результат очень даже");
    }
}
