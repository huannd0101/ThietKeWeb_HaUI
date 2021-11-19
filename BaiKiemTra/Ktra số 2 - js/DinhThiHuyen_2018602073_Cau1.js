function myF() {
  const reName = /^[0-9]+$/;
  const rePhone = /^[0-9\-]+$/;
  const rePass =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#%&*_?])([a-zA-Z0-9!@#%&*_?]{8,})$/;
  let ten = fullname.value;
  let pass1 = pass.value;
  let pass2 = passAgain.value;
  let sdt = phone.value;
  if (reName.test(ten)) {
    alert("Tên không được nhập số");
  } else if (!rePass.test(pass1)) {
    alert("Password chưa đạt yêu cầu");
  } else if (pass1 != pass2) {
    alert("Password chưa khớp");
  } else if (!rePhone.test(sdt)) {
    alert("Phone không hợp lệ");
  } else {
    alert("Đăng ký thành công");
  }
}
