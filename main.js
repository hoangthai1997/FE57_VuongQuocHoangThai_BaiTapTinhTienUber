function TinhTien(){
    var tongTien = document.getElementById("txtTongTien").value;
    var tienTip = document.getElementById("slPhanTramTip").value;
    var soNguoi = document.getElementById("txtSoNguoi").value;
    var thongBaoTienTip = document.getElementById("txtThongBaoTienTip");
    thongBaoTienTip.style.display = "block";
    var spanTien = document.getElementById("xuatTien");
    var thanhTien = parseFloat(tongTien) * parseFloat(tienTip) / parseFloat(soNguoi);
    spanTien.innerHTML = thanhTien;
}