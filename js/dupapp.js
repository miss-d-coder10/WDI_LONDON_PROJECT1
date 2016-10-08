$(document).ready(function(){

  var cities = ["London", "Paris", "New York", "Tokyo", "Beijing", "Vienna", "Dublin"];

  var randomChoice = Math.floor(Math.random() * cities.length);
  var word1 = cities[randomChoice];


  var shuffleArray = word1.split("");
  console.log(shuffleArray);
  Shuffle(shuffleArray);
  console.log(shuffleArray);
  var shuffledWord = shuffleArray.join("");
  console.log(shuffledWord);

  function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  $(".jumbleword").html(shuffledWord);

  $("button").on("click", function(){
    var randomChoice = Math.floor(Math.random() * cities.length);
    var answer = $(".text1").val().toLowerCase();
    console.log(answer);

    if(answer === word1){
      console.log("correct");
    }else{
      console.log("wrong");
    }

  });


});





//
//
// var CCOUNT;
// $(document).ready(function () {
//     $('#btnct').click(function () {
//         CCOUNT = $('#seconds').val();
//         cdreset();
//     });
// });
// var t, count;
//
// function cddisplay() {
//     document.getElementById('timespan').innerHTML = count;
// }
//
// function countdown() {
//     // starts countdown
//     cddisplay();
//     if (count === 0) {
//         // time is up
//     } else {
//         count--;
//         t = setTimeout(countdown, 1000);
//     }
// }
//
// function cdpause() {
//     // pauses countdown
//     clearTimeout(t);
// }
//
// function cdreset() {
//     // resets countdown
//     cdpause();
//     count = CCOUNT;
//     cddisplay();
// }
