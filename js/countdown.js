(function() {
  "use strict";

  /**
   * Countdown timer
   */
  let codepopularCountdown = document.getElementById('codepopularCountdown');
  const output = codepopularCountdown.innerHTML;

  const countDownDate = function() {
    let timeleft = new Date(codepopularCountdown.getAttribute('data-countdown-codepopular')).getTime() - new Date().getTime();

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    codepopularCountdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
  }
  countDownDate();
  setInterval(countDownDate, 1000);

})()