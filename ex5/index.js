//

function sapXep() {
  var stn = Number(document.getElementById("sot1").value);
  var sth = Number(document.getElementById("sot2").value);
  var stb = Number(document.getElementById("sot3").value);

  // output

  var soChan = 0;
  var soLe = 0;

  // xu ly

  if (stn % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (sth % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }
  if (stb % 2 == 0) {
    soChan++;
  } else {
    soLe++;
  }

  document.getElementById(
    "result"
  ).innerHTML = `Co ${soChan} chan - Co ${soLe} le`;
}
