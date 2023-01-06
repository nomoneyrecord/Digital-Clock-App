//utilized a couple different approaches for time and date
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
  const suffix = ['st','nd','rd',...Array(13).fill('th'),'st','nd','rd',Array(7).fill('th'),'st']
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = days[today.getDay()];
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const date = weekDay+", "+month+" "+day+suffix[day]+" "+year;

  document.getElementById("date").innerHTML = date;
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

//Utilizing the "setTimeout" value and milliseconds to get clock to tick
  let time = setTimeout(function(){ todaysDate() }, 1000);
}
//Used the checkTime method to add 0 in clock when necessary
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
todaysDate();
