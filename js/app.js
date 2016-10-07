$(document).ready(function(){

  function Shuffle(o) {
  	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  	return o;
  };

  var word1 = "london";
  var shuffleArray = word1.split("");
  console.log(shuffleArray);
  Shuffle(shuffleArray);
  console.log(shuffleArray);
  var shuffledWord = shuffleArray.join("");
  console.log(shuffledWord);




  $(".jumbleword").html(shuffledWord);

  $("button").on("click", function(){

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
