"use strict";

var questions = ["За сколько в 9000 году бегали стометровку?", "На какую высоту прыгали в 9000 году"];
var answers = [8, 20];

function ask() {
    var numberOfQuestions = answers.length;
    for (var i = 0; i < numberOfQuestions; i++) {
        var input = prompt(questions[i], "0");
        var answer = answers[i];
        input = Number(input);
        if (input === answer) {
            alert("Вы правы!");
        } else {
            alert("Вы неправы, правильный ответ " + String(answer));
        }
    }
}