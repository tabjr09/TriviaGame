
    var time;
    var right;
    var wrong;
    var intervalId;

    Initialize();

    function Initialize(){

        time = 10;
        right = 0;
        wrong = 10;
        $('#instructions').html("You will have 60 seconds to answer 10 questions based on R&B songs from the 90s.<br>"+
            "Let's see what you know! <br> Good Luck!");
        $('#quiz').hide(); //hide questions and timer until user starts the game
        $('#time-remaining').hide();
        $('#reset').hide();
        $('#submit').hide();
  
    }

    $('#start-button').click(function(){

        console.log("start button clicked");
        $('#quiz').show();
        $('#submit').show();
        console.log("quiz is shown");
        $('#time-remaining').show();
        $('#start-page').hide();
        run();
    });

    $('#reset').click(function(){ //to play again

         $('#score').hide(); //hide score results
        $('#start-page').show(); //show start page/instructions
        $(':checkbox').attr('checked',false); //clear the checkboxes
        Initialize();
    });


    $(':checkbox').change(function(){ //update so that only 1 checkbox canbe selected at a time

        if (this.checked) {
            $(this).siblings(':checkbox').attr('checked',false);
        }
    });

    $(':checkbox').click(function(){ //if the correct checkbox is selected update the score

        if(this.checked){

            if(this.value === "right"){
             right++;
             wrong--;
            }
        }
    })

    function run() { //start the timed quiz
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      time--;

      $("#time-remaining").html("Time remaining 00:" +time);

      if (time === 0){ //when time runs out
        
        gameOver();
        
        $("#time-remaining").html("<strong>Time's Up!</strong>");

        stop();
      }
    }

    function stop() {

        clearInterval(intervalId);
      }


    $('#submit').click(function(){

        gameOver();
    
    })

    function gameOver(){

        stop();
        time = 0;
        console.log("Submit button checked.");
        $("#quiz").hide();
        console.log("number right: "+ right +", number wrong: "+ wrong);
        $('#score').html("You got <strong> "+right +"</strong>  correct out of <strong> 10 </strong>. <br> Thanks for playing!")
        $('#score').show();
        $('#reset').show();
        $('#submit').hide();
    }

//if box is checked and value is right, then increment correct variable

//if box is checked and value is wrong, then increment worng variable

//if box is not checked increment wrong variable
