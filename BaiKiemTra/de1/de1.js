const chuanHoa = (str) => {
  let a = str.toLowerCase().trim().split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].trim() !== "") {
      a[i] = a[i][0].toUpperCase() + a[i].substr(1);
      b.push(a[i]);
    }
  }
  return b.join(" ");
};

const getGender = () => {
  if (document.getElementById("g1").checked) {
    return "Nam";
  } else if (document.getElementById("g1").checked) {
    return "Nữ";
  } else {
    return "Khác";
  }
};

const getHobby = () => {
  let res = [];
  if (document.getElementById("hob1").checked) {
    res.push("Sữa");
  }
  if (document.getElementById("hob2").checked) {
    res.push("Chè bưởi");
  }
  if (document.getElementById("hob3").checked) {
    res.push("Phở");
  }
  return res;
};

const myF = () => {
  let name = document.getElementById("name");
  let address = document.getElementById("address");

  if (name.value.trim() === "" || address.value.trim() === "") {
    alert("Bạn chưa nhập đủ dữ liệu");
    return;
  }

  let str = chuanHoa(name.value);
  name.value = str;

  alert(
    `Tên: ${str}\nĐịa chỉ: ${
      address.value
    }\n Giới tính: ${getGender()} \n Sở thích: ${getHobby()}`
  );
};
