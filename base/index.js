/* 
* cau truc re nhanh trong lap trinh
---------- Cau truc dieu kien ham "if"
 * ---------VI DU 1
 */

function tinhSo() {
  var iSoTag = document.getElementById("iSo_1").value;
  //   console.log(iSoTag);

  var ketQua = 0;

  // Xu ly

  ketQua = iSoTag;

  if (ketQua < 0) ketQua = -iSoTag;

  console.log(ketQua);

  document.getElementById(
    "ketQuaVidu1"
  ).innerHTML = `<h2 class="fs-4 fw-bold mt-4 p-2 bg-info"> Ket qua: ${ketQua} </h2>`;
}

/*
 *  Cau tru re nhanh trong lap trinh
 * -------------if else------------
 * + Dung: xu ly truong hop 1
 * + Sai: xu ly truong hop 2
 *
 * --- VI DU 2:
 */

function kiemTraSo() {
  //   alert("hello");
  // input number
  var iSoTag = document.getElementById("iSo_2").value;
  //   console.log(iSoTag);

  //   output: string - chuoi ket qua

  var ketQua = "";
  if (iSoTag % 10 == 0) {
    ketQua = "chia het";
  } else {
    ketQua = "khong chia het";
  }

  //   console.log(ketQua);

  //   Hien thi giao dien ra ben ngoai

  document.getElementById(
    "ketQuaViDu2"
  ).innerHTML = `<h2 class="fs-4 fw-bold mt-4 p-2 bg-info"> Ket qua: ${ketQua} </h2>`;
}

/**
 *  ------------VD 3
 *
 */

function xepLoai() {
  //   input: number
  var diemTrungBinh = document.getElementById("diemTrungBinh").value;

  console.log(diemTrungBinh);

  // Output : string - chuoi

  var ketQua = "";

  //    xu ly

  if (Number(diemTrungBinh) >= 5) {
    ketQua = "Dau";
  } else {
    ketQua = "Rot";
  }

  console.log(ketQua);

  // Xuat ra man hinh
  document.getElementById(
    "ketQuaViDu3"
  ).innerHTML = `<h2 class="fs-4 fw-bold mt-4 p-2 bg-info"> Ket qua: ${ketQua} </h2>`;
}

/**
 * ------ VI DU 4
 *
 * ---------su dung ky thuat dat linh canh, co hieu, dat bien tam
 */

function kiemTra() {
  // input: number

  var soThuNhat = document.getElementById("soThuNhat").value;
  var soThuHai = document.getElementById("soThuHai").value;

  //   Xu ly:
  var max = soThuNhat;

  if (max < soThuHai) {
    max = soThuHai;
  }

  //   output: string
  var ketQua = max;
  console.log(ketQua);

  //   In ra ket qua

  document.getElementById(
    "ketQuaViDu4"
  ).innerHTML = `<h2 class="fs-4 fw-bold mt-4 p-2 bg-info"> Ket qua: ${ketQua} </h2>`;
}

/**
 * --------VI DU 5
 */

function tinhTien() {
  //   alert("hello");

  // input: number
  var tienCongTrenGio = Number(
    document.getElementById("tienCongTrenGio").value
  );
  var soGioLam = Number(document.getElementById("soGio").value);

  //   output
  var ketQua = 0;
  var tienTangCa = 0;

  //   xu ly : Xet so gio lam co lon hon 40 khong

  if (soGioLam > 40) {
    tienTangCa = (soGioLam - 40) * tienCongTrenGio * 1.5;
    ketQua = 40 * tienCongTrenGio + (soGioLam - 40) * tienCongTrenGio * 1.5;
  } else {
    ketQua = soGioLam * tienCongTrenGio;
  }

  //   console.log(ketQua);

  // Hien thi tien luong

  document.getElementById(
    "ketQuaViDu5"
  ).innerHTML = `<p class="fw-bold mt-4 p-2 bg-info text-light"> Tien Luong : ${ketQua} <br /> Tien Tang Ca: ${tienTangCa} </p>`;
}
