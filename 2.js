let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#thr");
let four=document.querySelector("#fou");
let five=document.querySelector("#fiv");
var aud_one=document.querySelector("#one_audio");
var aud_two=document.querySelector("#two_audio");
var aud_three=document.querySelector("#three_audio");
var aud_four=document.querySelector("#four_audio");
var aud_five=document.querySelector("#five_audio");
one.addEventListener('click',function(e) {
    console.log("CLICKED1")
    aud_one.play();

})
two.addEventListener('click',function(e) {
    aud_two.play();
})
three.addEventListener('click',function(e) {
    aud_three.play();
})
four.addEventListener('click',function(e) {
    aud_four.play();
})
five.addEventListener('click',function(e) {
    aud_five.play();
})
 