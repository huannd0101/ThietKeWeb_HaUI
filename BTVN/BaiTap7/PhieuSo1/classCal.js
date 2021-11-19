
export default class maytinh{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    tong() {
        console.log("tong");
        document.nhap.result.value = this.x + this.y;
    }

    hieu() {
        document.nhap.result.value = x - y;
    }

    tich() {
        document.nhap.result.value = x * y;
    }

    chia() {
        document.nhap.result.value = x / y;
    }

    mu() {
        document.nhap.result.value = Math.pow(x, y);
    }        

    log(){
        console.log(this.x);
        console.log(this.y);
    }
};