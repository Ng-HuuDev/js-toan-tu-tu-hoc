//

function sapXep() {
  var soThuNhat = Number(document.getElementById("sothunhat").value);
  var soThuHai = Number(document.getElementById("sothuhai").value);
  var soThuBa = Number(document.getElementById("sothuba").value);

  // output: string

  var sapXep = "";

  // Xu ly

  if (soThuNhat < soThuHai && soThuHai < soThuBa) {
    sapXep = `ST1: ${soThuNhat}, ST2: ${soThuHai}, ST3: ${soThuBa}`;
  } else if (soThuNhat < soThuBa && soThuBa < soThuHai) {
    sapXep = `ST1: ${soThuNhat}, ST3: ${soThuBa}, ST2: ${soThuHai}`;
  } else if (soThuHai < soThuNhat && soThuNhat < soThuBa) {
    sapXep = `ST2: ${soThuHai}, ST1: ${soThuNhat}, ST3: ${soThuBa}`;
  } else if (soThuHai < soThuBa && soThuBa < soThuNhat) {
    sapXep = `ST2: ${soThuHai}, ST3: ${soThuBa}, ST1: ${soThuNhat}`;
  } else if (soThuBa < soThuNhat && soThuNhat < soThuHai) {
    sapXep = `ST3: ${soThuBa}, ST1: ${soThuNhat}, ST2: ${soThuHai}`;
  } else if (soThuBa < soThuHai && soThuHai < soThuNhat) {
    sapXep = `ST3: ${soThuBa}, ST2: ${soThuHai}, ST1: ${soThuNhat}`;
  } else {
    sapXep = "vui long chon 3 so khac nhau";
  }
  //   Xuat ket qua ra ngoai man hinh
  document.getElementById(
    "result"
  ).innerHTML = `<p class="fw-bold mt-4 p-2 bg-info text-light"> Thu tu sap xep: ${sapXep} </p>`;
}
