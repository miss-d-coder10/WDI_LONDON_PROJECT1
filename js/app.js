$(function(){
  console.log("loaded");


  var cell = $(".cell");
  var lulu = [cell[2], cell[3], cell[4], cell[5]];
  var row3 = [cell[16], cell[17], cell[18], cell[19], cell[20], cell[21]];
  var row7 = [cell[49], cell[50], cell[51], cell[52], cell[53], cell[54], cell[55]];
  var col7 = [cell[14], cell[22], cell[30], cell[38], cell[46], cell[54], cell[62]];
  var col8 = [cell[15], cell[23], cell[31], cell[39], cell[47], cell[55]];
  var diag1 = [cell[32], cell[41], cell[50], cell[59], cell[68]];
  var words = [lulu, row3, row7, col7, col8, diag1];
  var wordsToFind = ["lulu", "pecker", "quacker", "wiggles", "ducker", "fluff"];
  var userMoves = [];
  var wordFound = 0;

  //click start game

  //timer function
  function startTimer(){
    var counter = 10;
    var gameTimer = setInterval(myTimer, 1000);
    function myTimer (){

      if (counter >= 0){
        // $("#countdown");
        $("#countdowntimer").html(counter);
        $('.reset').hide();

      }
      if (counter < 0){
        console.log("Counter ran out!!!!!!!!!!!!!!!!!!!!!");
        clearInterval(gameTimer);
        $('.reset').show();

      } else {
        if(counter <=55){
          // console.log("quick");
            // $("#countdowntimer").addClass('animated infinite pulse'),
            // $("bird").html("<img id='eagle' src='images/eagle.jpg' alt='eagle' height='40px' width='40'/>");

          $("#countdowntimer").addClass('animated infinite pulse');
          $(".bird").html("<img id='eagle' src='images/eagle.jpg' alt='eagle' height='40px' width='40px'/>");
        }
      }
      counter--;
      console.log(counter);
    }
  }

  $(".startbutton").on("click", function(){
    startTimer();
    // console.log(this);
    clickTiles();
  });

  // $(".cell").mousedown("highlight", clickTiles);
  $(".cell").on("click", clickTiles);

  function clickTiles(){
    var $tile = $(this);
    // console.log(this, "clicked");  // click event on each tile works
    // $(this).css('background', 'red');
    $(this).addClass('active');
    if (!$(this).attr('data-word')) {
      setTimeout(function(){
        $tile.removeClass('active');
      }, 500);
    }
    userMoves.push(this);
    // console.log(userMoves);
    checkForMatchingWord();
  }

  function checkForMatchingWord(){
    // loop over the first array of winning combinations
    for (i = 0; i < words.length; i++) {
      // reset the winCounter each time!
      winCounter = 0;
      // loop over each individual array
      for (var j = 0; j < words[i].length; j++) {
        // loop over the inside the array to check the words
        if(userMoves.indexOf(words[i][j]) !== -1){
          winCounter++;
        }
        if(winCounter === words[i].length){
          $("#"+wordsToFind[i]).css('color', 'green');

          $("#"+wordsToFind[i]).html("<img id='babyduck' src='images/babyduck.jpg' alt='duck' height='40px' width='40'/>");

          // Removing found word from words array
          var index = words.indexOf(words[i]);
          if (index > -1) {
              words.splice(index, 1);
              wordsToFind.splice(index, 1);
          }
          if (words.length === 0) {
            alert("Found all the words");

          }
        }
      }
    }
  }












  //
  //
  //
  // var wordToSearch = $("#list li").length,
  // colors = ["red", "yellow", "blue", "green", "purple"],
  // found = 0,
  // clicking = false;
  //
  // $(".resetbutton").on("click", function(){
  //   $(".cell").attr("class", "cell");
  //   $("#list li").removeClass("found");
  //   $(".resetbutton").hide();
  //   found = 0;
  //
  // });
  //
  // $("#wordsearch1").mousedown(function(){
  //   clicking = true;
  //
  // });
  //
  // $("#wordsearch1").mouseup(function(){
  //   clicking = false;
  //   $(".cell").removeClass("highlight");
  //
  // });
  //
  // $(".cell").mouseover().mouseout(function(){
  //   if(clicking){
  //     $(this).toggleClass("highlight");
  //     console.log($(this));
  //     var word = $(this).attr("data-word"),
  //     wordLength = word.length;
  //
  //     $cell = $(".cell[data-word='" + word + "']");
  //     console.log(word);
  //     if ($(".cell[data-word='" + word + "'].highlight").length === wordLength){
  //     $cell.removeClass("highlight").addClass("found-" + colors[found]);
  //     $("li:contains('" + word + "')").addClass("found");
  //     $(".cell").removeClass("highlight");
  //     found++;
  //
  //     }
  //
  //     console.log(found + " - " + wordSearch);
  //     if (found === wordSearch){
  //       console.log("You found my babies");
  //       $(".resetbutton").show();
  //     }
  //
  //   }
  // });
















}); // do not touch this is the end of the line one function
