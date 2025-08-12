abstract class Account{
    id:string;
    userName:string;
    password:string;
    isLogin:boolean;
    role:string;
    constructor(id:string, userName:string, password:string, isLogin:boolean, role:string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    abstract login():void;
    logOut():void {
        if(this.isLogin){
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false;
        }

    }

}
class userAccount extends Account {
    status:boolean;
    constructor(id:string, userName:string, password:string, isLogin:boolean, role:string, status:boolean) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login():void {
        if(this.status) {
            this.isLogin = true;
        }else{
            console.log(`Tai khoan da bi khoa`);
        }
            
    }
}
class adminAccount extends Account {
    login():void{
        this.isLogin = true;

    }
    banUser(id:string,users:userAccount[]):void {
        const user = users.find(a=>a.id === id);
        if(user){
            user.status = false
        }
    }


}


