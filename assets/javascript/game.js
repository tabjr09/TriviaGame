
    var time = 60;

    var intervalId;

    //console.log(this);

    $(':checkbox').change(function(){

        if (this.checked) {
            $(this).siblings(':checkbox').attr('checked',false);
            console.log("check box updated");
            console.log(this);
        }
    
    });

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
      }
    }

    function stop() {

        clearInterval(intervalId);
      }

    run();

