//

function tinhTien() {
  var soGio = Number(document.getElementById("soGio").value);
  var tienLuongTheoTuan = Number(
    document.getElementById("tienLuongTheoTuan").value
  );

  // output : number

  var tienLuong = 0;

  // xu ly

  if (soGio <= 40) {
    tienLuong = soGio * tienLuongTheoTuan;
  } else {
    var tienOt = (soGio - 40) * 1.5 * tienLuongTheoTuan;
    tienLuong = tienOt + 40 * tienLuongTheoTuan;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p class="fw-bold mt-4 p-2 bg-info text-light"> Tien Luong Ban Nhan Duoc: ${tienLuong}usd <br /> Tien Tang Ca: ${tienOt}usd </p>`;
}
