let span = document.querySelector(".second");
let span2 = document.querySelector(".minute");
let span3 = document.querySelector(".hour");

function* something() {
  var fn1 = 0;
  while (true) {
    var reset = yield fn1++;
    if (reset) {
      fn1 = 0;
      yield 0;
    }
  }
}

let it = something();
span.textContent = "00";
it.next().value;

let clockSeconds = function() {
  let number = it.next().value;
  if (number === 59) {
    it.next(true).value;
  }
  if (number === 0) {
    clockMinute();
  }
  if (number < 10) {
    span.textContent = number.toString().padStart(2, "0");
  } else {
    span.textContent = number;
  }

  console.log(number);
};

let it2 = something();
span2.textContent = "00";
it2.next().value;

let clockMinute = function() {
  let number = it2.next().value;
  if (number === 59) {
    it2.next(true).value;
  }
  if (number === 0) {
    clockHour();
  }
  if (number < 10) {
    span2.textContent = number.toString().padStart(2, "0");
  } else {
    span2.textContent = number;
  }
};

let it3 = something();
span3.textContent = "00";
it3.next().value;

let clockHour = function() {
  let number = it3.next().value;
  if (number === 11) {
    it3.next(true).value;
  }
  if (number < 10) {
    span3.textContent = number.toString().padStart(2, "0");
  } else {
    span3.textContent = number;
  }
};
setInterval(clockSeconds, 1000);
