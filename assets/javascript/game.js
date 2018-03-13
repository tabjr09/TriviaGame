
    var time = 10;

    var right = 0;
    var wrong = 10;
    var checked = 0;

    var intervalId;

    //console.log(this);

    $('#quiz').hide();
    $('#time-remaining').hide();

    $('#start-button').click(function(){

        console.log("start button clicked");
        $('#quiz').show();
        $('#time-remaining').show();
        $('#start-page').hide();
        run();
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

        $("#time-remaining").html("Time Up!");

        stop();

        alert("Time Up!");
        $("#quiz").hide();
        console.log("number right: "+ right +", number wrong: "+ wrong);
        $('#score').html("You got "+right +" correct out of 10. <br> Thanks for playing!")
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
