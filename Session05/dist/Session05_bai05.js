"use strict";
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    tinhDienTich() {
        return this.width * this.height;
    }
    tinhChuVi() {
        return 2 * (this.width + this.height);
    }
}
const rectangle1 = new Rectangle(5, 10);
rectangle1.tinhDienTich();
rectangle1.tinhChuVi();
rectangle1.width = 15;
rectangle1.height = 20;
rectangle1.tinhDienTich();
rectangle1.tinhChuVi();
