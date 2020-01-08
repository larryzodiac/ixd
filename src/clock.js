(function () {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
    h = checkTime(today.getHours()),
    m = checkTime(today.getMinutes()),
    s = checkTime(today.getSeconds()),
    d = today.getDate(),
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    mo = months[today.getMonth()],
    y = today.getFullYear();
    if(document.getElementById('clock')) {
     document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + "<br/>" + d + ", " + mo + ", " + y + "<br/> Kildare";
    }
    let t = setTimeout(function () {
      startTime()
    }, 500);
  }
  startTime();
})();
