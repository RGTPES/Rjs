"use strict";
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logOut() {
        if (this.isLogin) {
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false;
        }
    }
}
class userAccount extends Account {
    status;
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status) {
            this.isLogin = true;
        }
        else {
            console.log(`Tai khoan da bi khoa`);
        }
    }
}
class adminAccount extends Account {
    login() {
        this.isLogin = true;
    }
    banUser(id, users) {
        const user = users.find(a => a.id === id);
        if (user) {
            user.status = false;
        }
    }
}
