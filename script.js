function todaysDate() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = days[today.getDay()];
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const date = weekDay+", "+month+" "+day+" "+year;

  document.getElementById("date").innerHTML = date;
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

  let time = setTimeout(function(){ todaysDate() }, 1000);
}

function ordinal(date) {
  if(date > 20 || date < 10) {
    switch(date%10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  return "th";
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
todaysDate();
ordinal();