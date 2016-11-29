$(function () {

    console.log('js is working!');

    // functions for check time button
    function calculateTime () {
      var today = new Date();
      var hour = today.getHours();
      var minute = today.getMinutes();
      var isEvening;

      if (hour < 12) {
        isEvening = false;
      } else {
        hour = hour - 12;
      }

      var abbrev;
      if (isEvening) {
        abbrev = " pm";
      }
      else {
        abbrev = " am";
      }

      var time = hour.toString() + ":" + minute.toString() + abbrev;
      return time;
    }

    function showTime () {
      var currentTime = calculateTime();
      $('.box').html('<h1>' + currentTime + '</h1>');
    }

    $('button').on('click', showTime);

});