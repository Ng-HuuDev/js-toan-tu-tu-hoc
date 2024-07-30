//

function tinhTien() {
  // input

  var matHang = document.getElementById("tenMatHang").value;
  var soLuong = Number(document.getElementById("soLuong").value);
  var donGia = Number(document.getElementById("giaTien").value);

  // output

  var tienHang = 0;

  // xu ly: su dung else if de lam

  if (soLuong < 50) {
    tienHang = soLuong * donGia;
  } else if (soLuong >= 50 && soLuong <= 100) {
    tienHang = 49 * donGia + (soLuong - 49) * donGia * 0.92;
  } else {
    tienHang = 100 * donGia + (soLuong - 100) * donGia * 0.88;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p class="fw-bold mt-4 p-2 bg-info text-light"> Loai san pham: ${matHang} <br /> So Luong: ${soLuong}sp <br /> Tong thanh toan ${tienHang}usd </p>`;
}
