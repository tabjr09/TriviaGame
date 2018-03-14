
    var time = 10;

    var right = 0;
    var wrong = 10;
    var checked = 0;

    var intervalId;


    $('#quiz').hide(); //hide questions and timer until user starts the game
    $('#time-remaining').hide();
    $('#reset').hide();

    $('#start-button').click(function(){

        console.log("start button clicked");
        $('#quiz').show();
        $('#time-remaining').show();
        $('#start-page').hide();
        run();
    });

    $('#reset').click(function(){

        time = 60;
        var right = 0;
        var wrong = 10;
        $('#quiz').hide(); //hide questions and timer until user starts the game
        $('#time-remaining').hide();
        $('#reset').hide();
        $('#score').hide();
        $('#start-page').show();
        $(':checkbox').attr('checked',false);
        
    });


    $(':checkbox').change(function(){

        if (this.checked) {
            $(this).siblings(':checkbox').attr('checked',false);

        }
    
    });

    $(':checkbox').click(function(){

        if(this.checked){

            if(this.value === "right"){
             right++;
             wrong--;
            }
        }
    })

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      time--;

      $("#time-remaining").html(time + " seconds remaining");

      if (time === 0) {

        $("#time-remaining").html("<strong>Time's Up!</strong>");

        stop();

        alert("Time Up!");
        $("#quiz").hide();
        console.log("number right: "+ right +", number wrong: "+ wrong);
        $('#score').html("You got <strong> "+right +"</strong>  correct out of <strong> 10 </strong>. <br> Thanks for playing!")
        $('#reset').show();
      }
    }

    function stop() {

        clearInterval(intervalId);
      }


    $('#submit').click(function(){

       
        stop();
        time = 0;
        console.log("Submit button checked.");
        $("#quiz").empty();
        console.log("number right: "+ right +", number wrong: "+ wrong);
        $('#score').html("You got "+right +" correct out of 10. Thanks for playing!")
    })

//if box is checked and value is right, then increment correct variable

//if box is checked and value is wrong, then increment worng variable

//if box is not checked increment wrong variable
