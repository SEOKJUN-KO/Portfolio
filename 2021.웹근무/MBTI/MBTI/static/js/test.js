const percent = document.getElementsByClassName("percent-graph");
const percent2 = document.getElementsByClassName("sticky-percent-graph");
const percentword = document.getElementsByClassName("percent-word");
const percentword2 = document.getElementsByClassName("sticky-percent");


var width = percent[0].style.width;
var plus = 0;
var added = '';
function increase() {
    plus = plus + 5;
    added = plus + '%';
    percent[0].style.width = added;
    percent2[0].style.width = added;
    percentword[0].innerHTML = added;
    percentword2[0].innerHTML = added;
}