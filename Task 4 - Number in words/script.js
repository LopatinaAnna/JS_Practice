let a = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let b = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

function inWords(number) {
  let n = number.length;

  // 1..19
  if ((n == 1) || (n == 2 && number < 20))
    return a[number];

  // 20..99
  if (n == 2 && number >= 20 && number < 100) {
    // 20..20..90
    if (number % 10 == 0)
      return b[number[0]];
    // 21..22..23
    else
      return b[number[0]] + " " + a[number[1]];
  }

  // 100..999
  if (n == 3 && number < 1000) {
    // 100..200..900
    if (number % 100 == 0)
      return a[number[0]] + " hundred";
      // 101..102..109
    else if (number.substring(1) < 10)
      return a[number[0]] + " hundred and " + a[number.substring(2)];
    // 110..111..119
    else if (number.substring(1) < 20)
      return a[number[0]] + " hundred and " + a[number.substring(1)];
    // 120..130..190
    else if (number % 10 == 0)
      return a[number[0]] + " hundred and " + b[number[1]];
    // 121..123..125
    else
      return a[number[0]] + " hundred and " + b[number[1]] + "-" + a[number[2]];
  }

}

document.getElementById('number').onkeyup = function() {
  document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};
