//utilized a couple different approaches for time and date
function updateClockElements() {
  let today = new Date();
  const str_Time = formatTimeString(today)
  const str_Date = formatDateString(today)
  document.getElementById("date").innerText = str_Date;
  document.getElementById("clock").innerText = str_Time
}

const formatTimeString = (today) => {
  const str_Hour = addLeadingZero(today.getHours() < 12 ? today.getHours() : today.getHours() - 12)
  const str_Minute = addLeadingZero(today.getMinutes())
  const str_Second = addLeadingZero(today.getSeconds())
  const str_AMorPM = today.getHours() < 12 ? "AM" : "PM"
  return str_Hour + ":" + str_Minute + ":" + str_Second + " " + str_AMorPM
}

const addLeadingZero = (number) => {
  if (number >= 10) return number
  return "0"+number
} 

const formatDateString = (today) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const suffix = ['st','nd','rd',...Array(13).fill('th'),'st','nd','rd',Array(7).fill('th'),'st']
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = today.getDate();
  const weekDay = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return weekDay+", "+month+" "+day+suffix[day]+" "+year;
}
  
setInterval(updateClockElements,1000)