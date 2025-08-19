const hrs = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
}, 1000);
