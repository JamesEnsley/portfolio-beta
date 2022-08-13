let inventornumber = document.getElementById("inventor-number");
let solidworksnumber = document.getElementById("solidworks-number");
let grantanumber = document.getElementById("granta-number");

let icounter = 0;
setInterval(() => {
  if (icounter == 80) {
  clearInterval();
  } else {
    icounter += 1;
    inventornumber.innerHTML = icounter + "%";
    }
}, 20)

let jcounter = 0;
setInterval(() => {
  if (jcounter == 50) {
  clearInterval();
  } else {
    jcounter += 1;
      solidworksnumber.innerHTML = jcounter + "%";
    }
}, 20)

let kcounter = 0;
setInterval(() => {
  if (kcounter == 30) {
    clearInterval();
  } else {
    kcounter += 1;
    grantanumber.innerHTML = kcounter + "%";
  }
}, 20)