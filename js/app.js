//started with document load function using jquery
$(function(){
  console.log("loaded");

//variables for the game

  var cell = $(".cell");
  var lulu = [cell[2], cell[3], cell[4], cell[5]];
  var row3 = [cell[16], cell[17], cell[18], cell[19], cell[20], cell[21]];
  var row7 = [cell[49], cell[50], cell[51], cell[52], cell[53], cell[54], cell[55]];
  var col7 = [cell[14], cell[22], cell[30], cell[38], cell[46], cell[54], cell[62]];
  var col8 = [cell[15], cell[23], cell[31], cell[39], cell[47], cell[55]];
  var diag1 = [cell[32], cell[41], cell[50], cell[59], cell[68]];
  var words = [lulu, row3, row7, col7, col8, diag1];
  var wordsToFind = ["lulu", "pecker", "quacker", "wiggles", "ducker", "fluff"];
  var userMoves = []; //empty array which will be used to push all the words found.
  var gameTimer; //global  variable to timer when the game starts

  var backgroundMusic = document.getElementById("player");

  var playButton = document.getElementById("mainmusicbutton");
    // playButton.addEventListener("click", music);

    function music(){
      console.log(playButton);
      backgroundMusic.src = "music/jungle-SoundBible.com-1211567897.wav";
      backgroundMusic.play();
    }

    function eagleSound(){
      backgroundMusic.src = "music/Screaming Hawk-SoundBible.com-1210664501.wav";
      backgroundMusic.play();
    }

    function loserSound(){
      backgroundMusic.src = "music/Really Big Burp-SoundBible.com-1963610382.wav";
      backgroundMusic.play();
    }

    function winningSound(){
      backgroundMusic.src = "music/Quack Quack-SoundBible.com-620056916.wav";
      backgroundMusic.play();
    }

    function duckSound(){
      backgroundMusic.src = "music/Baby Chicks-SoundBible.com-2811441.wav";
      backgroundMusic.play();
    }

//timer function starting from 60 second with 1 second interval
function startTimer(){
    var counter = 60;
    gameTimer = setInterval(myTimer, 1000); //variable created set call an counter interval function
    //GameTimer for the countdown
    function myTimer (){
      //if the variable counter (60)is greater than 0, insert the counter to HTML page
      if (counter >= 0){
        $("#countdowntimer").html(counter);
      }
      if (counter === 0){
        console.log("game over");
        clearInterval(gameTimer);
        $('#gameoverboard').show();
        $("#mainboard").hide();
        $(".bird").hide();
        loserSound();

      } else {
        if(counter <=10){
          // console.log("quick");
            // $(".bird").html("<img class='animated rollIn' id='eagle' src='images/eagle.png' alt='eagle' height='100px' width='100px'/>");
            $("#countdowntimer").addClass('animated infinite pulse');
        }
        if(counter === 10){
          console.log("play");
          $(".bird").html("<img class='animated rollIn' id='eagle' src='images/eagle.png' alt='eagle' height='200px' width='200'/>");
          eagleSound();
        }
      }
      counter--;
      console.log(counter);
    }
  }

  //Click start button function which activates the game and the timer function and calling out the display features.
  $(".startbutton").on("click", function(){
    startTimer();
    // console.log(this);
    clickTiles();
    mainboard.style.display="block";
    startgameboard.style.display="none";
  });

 //Click function

  $(".cell").on("click", clickTiles);

  function clickTiles(){
    var $tile = $(this);
    // console.log(this, "clicked");  // click event on each tile works
    $(this).addClass('active'); // add class that changes colour when tiles are clicked
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
          // $("#"+wordsToFind[i]).css('color', 'green');
          $("#"+wordsToFind[i]).html("<img class='animated bounce infinite'  id='babyduck' src='images/babyduck.png' alt='duck' height='40px' width='40'/>");
          duckSound();
          // Removing found word from words array
          var index = words.indexOf(words[i]);
          if (index > -1) {
              words.splice(index, 1);
              wordsToFind.splice(index, 1);
          }
          if (words.length === 0) {
            // alert("Found all the words");
            stop();
            winningboard.style.display="block";
            mainboard.style.display="none";
            $(".bird").hide();
            $('#gameoverboard').hide();
            winningSound();
          }
        }
      }
    }
  }

function stop(){
  console.log("timer stopped now!!!!!");
  clearInterval(gameTimer);
  // clearInterval(gameTimer);
}

$(".popupboard").on("click", reset);
  function reset (){
  location.reload();
  }

}); // do not touch this is the end of the line one function
