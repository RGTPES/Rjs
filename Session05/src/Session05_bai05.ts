class Rectangle{
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    tinhDienTich(): number {
        return this.width * this.height;
    }
    tinhChuVi(): number {
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