enum ROLES1 {
    admin = "admin",
    author = "author",
    editor = "editor",
}

interface Role1 {
    role: ROLES1,

}

enum PERMISSIONlIST {

    read = "read",
    write = "write",
    execute = "execute",

}

interface UserPermission {

    permission: PERMISSIONlIST[];


}



interface User1 {
    name: string;
    email: string;
    phone: number;
    gender: string;
}

interface AdminUser1 extends User1, Role1, UserPermission {

    numberOfUserReportin: number;
}

interface UserWithAddress extends User1 {
    address: string;
}

const user8: User1 = {
    name: "Akki",
    email: "test@gmail.com",
    phone: 1234,
    gender: "Male",
};

const userwithAddress: UserWithAddress = {
    address: "This is the address",
    name: "Akki",
    email: "test@gmail.com",
    phone: 1234,
    gender: "Male",

};

const rob: AdminUser1 = {

    name: "Akki",
    email: "test@gmail.com",
    phone: 1234,
    gender: "Male",
    role: ROLES1.admin,
    permission: [
        PERMISSIONlIST.read,
        PERMISSIONlIST.write,
        PERMISSIONlIST.execute,
    ],
    numberOfUserReportin: 5,

}


console.log(user8);

console.log(userwithAddress);

console.log(rob);