$(function(){
  console.log("loaded");


// var row1 = [cell[2], cell[3], cell[4], cell[5]];
// var row3 = [cell[16], cell[17], cell[18], cell[19], cell[20], cell[21]];
// var row7 = [cell[49], cell[50], cell[51], cell[52], cell[53], cell[54], cell[55]];
// var col7 = [cell[14], cell[22], cell[30], cell[38], cell[46], cell[54], cell[62]];
// var col8 = [cell[15], cell[23], cell[31], cell[39], cell[47], cell[55]];
// var diag1 = [cell[32], cell[41], cell[50], cell[59], cell[68]];

//click start game


function startTimer(){
  var counter = 60;
  setInterval(function(){
    counter--;
    if (counter >= 0){
      $("#countdown");
      $("#countdowntimer").html(counter);
    }
    if (counter === 0){
      clearInterval(counter);
    }
  }, 1000);
}
$(".startbutton").on("click", function(){
    startTimer();
    console.log(this);

 });

var wordSearch = $("#list li").length,
colors = ["red"],
found = 0,
clicking = false;

$(".resetbutton").on("click", function(){
  $(".cell").attr("class", "box");
  $("#list li").removeClass("found");
  $(".resetbutton").hide();
  found = 0;

});

$("#wordsearch1").mousedown(function(){
  clicking = true;

});

$("#wordsearch1").mouseup(function(){
  clicking = false;
  $(".cell").removeClass("highlight");

});

$(".cell").mouseover().mouseout(function(){
  if(clicking){
    $(this).toggleClass("highlight");
    console.log($(this));
    var word = $(this).attr("data-word"),
    wordLength = word.length;

    $cell = $(".cell[data-word]='" + word + "']" );
    console.log($cell);
    if ($(".cell[data-word]='" + word + "'].highlight").length == wordLength){
    $cell.removeClass("highlight").addClass("found-" + colors[found]);
    $("li:contains('" + word + "')").addClass("found");
    $(".cell").removeClass("highlight");
    found++;

    }

    console.log(found + " - " + wordSearch);
    if (found === wordSearch){
      console.log("You found my babies");
      $(".resetbutton").show();
    }




  }

});










//
// var cell = $(".cell");
//
// function clickTiles(){
//
//
// }





// $(".cell").on("click", function(){
//   console.log(this, "clicked");  // click event on each tile works
//    $(this).css('background', 'red');
//
//
//  });//click event function



}); // do not touch this is the end of the line one function

























//
//
//
//
//
//
// $(document).ready(function(){
//
//   var cities = ["London", "Paris", "New York", "Tokyo", "Beijing", "Vienna", "Dublin"];
//
//   var randomChoice = Math.floor(Math.random() * cities.length);
//   var word1 = cities[randomChoice];
//
//
//   var shuffleArray = word1.split("");
//   console.log(shuffleArray);
//   Shuffle(shuffleArray);
//   console.log(shuffleArray);
//   var shuffledWord = shuffleArray.join("");
//   console.log(shuffledWord);
//
//   function Shuffle(o) {
//     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//     return o;
//   }
//
//   $(".jumbleword").html(shuffledWord);
//
//   $("button").on("click", function(){
//     var randomChoice = Math.floor(Math.random() * cities.length);
//     var answer = $(".text1").val().toLowerCase();
//     console.log(answer);
//
//     if(answer === word1){
//       console.log("correct");
//     }else{
//       console.log("wrong");
//     }
//
//   });
//
//
// });
//




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
