document.getElementById('number').onchange = function() {
  let day = document.getElementById("number").value;
  if (day >= 1 && day <= 7) {
    let date = new Date(2021, 2, day).toLocaleString('en-us', { weekday: 'long' });
    document.getElementById("date").innerHTML = date;
  } else
    document.getElementById("date").innerHTML = "Input number in range from 1 to 7";
};
