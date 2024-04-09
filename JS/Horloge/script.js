$(document).ready(function () {
    const getTens = (x) => parseInt(x / 10);
    const getOnes = (x) => parseInt(x % 10);
   
    setInterval(() => {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

      $(".secondsOnes").css({
        transform: "rotateY(90deg) rotate(" + getOnes(seconds) * 36 + "deg)",
      });
      $(".secondsTens").css({
        transform:
          "rotateY(90deg) rotate(" + getTens(seconds) * 36 + "deg)",
      });
      $(".minutesOnes").css({
        transform: "rotateY(90deg) rotate(" + getOnes(minutes) * 36 + "deg)",
      });
      $(".minutesTens").css({
        transform:
          "rotateY(90deg) rotate(" + getTens(minutes) * 36 + "deg)",
      });
  
      $(".hoursOnes").css({
        transform: "rotateY(90deg) rotate(" + getOnes(hours) * 36 + "deg)",
      });
      $(".hoursTens").css({
        transform: "rotateY(90deg) rotate(" + getTens(hours) * 36 + "deg)",
      });
    }, 1000);
});
        // var day = time.getDay;
        // var nday = time.getDate;
        // var months = time.getMonth;
        // var year = time.getFullYear;
        // var ms = time.getMilliseconds;