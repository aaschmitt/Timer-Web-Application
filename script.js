var min = 0;
var sec = 0;
var mili = 0;
var stoptime = true;

function startTimer()
{
    if (stoptime == true)
    {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer()
{
    if (stoptime == false)
    {
        stoptime = true;
    }
}

function timerCycle()
{
    if (stoptime == false)
    {
        mili = parseInt(mili);
        sec = parseInt(sec);
        min = parseInt(min);

        mili = mili + 1;

        if (mili == 100)
        {
            sec = sec + 1;
            mili = 0;
        }
        if (sec == 60)
        {
            min = min + 1;
            sec = 0;
            mili = 0;
        }

        if (mili < 10 || mili == 0)
        {
            mili = '0' + mili;
        }
        if (sec < 10 || sec == 0)
        {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0)
        {
            min = '0' + min;
        }

        $("#display").html(min + ':' + sec + ':' + mili);

        setTimeout("timerCycle()", 10);
    }
}

function resetTimer()
{
    $("#display").html("00:00:00");
    stoptime = true;
    min = 0;
    mili = 0;
    sec = 0;
}

$(document).ready(function() {

    $("#start-button").click(function (e) { 
        e.preventDefault();
        startTimer();
    });

    $("#pause-button").click(function (e) { 
        e.preventDefault();
        stopTimer();
    });

    $("#reset-button").click(function (e) { 
        e.preventDefault();
        resetTimer();
    });

});