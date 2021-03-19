let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("results").innerHTML = this.responseText;
  }
};

run.addEventListener('click', function() {
  let optionsList = document.getElementById("options");
  let selectedOption = optionsList.options[optionsList.selectedIndex].value;
  let value = document.getElementById("value").value;

  let url = `https://randomuser.me/api/?format=pretty&results=5&${selectedOption}=${value}`;
  
  xhttp.open("GET", url, true);
  xhttp.send();
});
