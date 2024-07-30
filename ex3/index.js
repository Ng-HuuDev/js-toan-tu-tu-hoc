//

function tinhDiem() {
  var hoTen = document.getElementById("hoTen").value;
  var diemToan = Number(document.getElementById("diemToan").value);
  var diemLy = Number(document.getElementById("diemLy").value);
  var diemHoa = Number(document.getElementById("diemHoa").value);

  // output

  var diemTb = (diemToan + diemLy + diemHoa) / 3;

  var xepLoai = "";

  if (diemTb >= 8.5) {
    xepLoai = "Gioi";
  } else if (diemTb >= 6.5) {
    xepLoai = "Kha";
  } else if (diemTb >= 5) {
    xepLoai = "Trung Binh";
  } else {
    xepLoai = "Yeu";
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p class="fw-bold mt-4 p-2 bg-info text-light"> Ho va Ten: ${hoTen} <br /> Diem trung binh: ${diemTb} <br /> Xep loai hoc luc: ${xepLoai} </p>`;
}
