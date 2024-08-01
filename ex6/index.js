//
function kiemTra() {
  var cTN = Number(document.getElementById("canhTN").value);
  var cTH = Number(document.getElementById("canhTH").value);
  var cTB = Number(document.getElementById("canhTB").value);

  console.log({ cTN, cTH, cTB });
  //output
  var kiemTra = "";

  // xu ly
  if (cTN == cTH && cTH == cTB) {
    kiemTra = "tam giac deu";
  } else if (cTN == cTH || cTN == cTB || cTH == cTB) {
    kiemTra = "tam giac can";
  }

  // xuat ra man hinh
  document.getElementById("result").innerHTML = `${kiemTra}`;
}
