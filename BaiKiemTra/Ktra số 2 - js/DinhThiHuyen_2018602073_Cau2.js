function myF() {
    let x = parseInt(document.getElementById("inputData").value);
    let s = 0;
    for (let i = 1; i <= x; i++) {
      if (i % 6 === 0) {
        s += i;
      }
    }
    document.getElementById("res").innerHTML = s;
  }