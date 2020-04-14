class user{
    constructor(name, email, passwd, image, address, phone, admin){
        this.name = name;
        this.email = email;
        this.passwd = passwd;
        this.image = image;
        this.address = address;
        this.phone = phone;
        this.admin = admin;
        this.joinedAt = Date.now;
        this.token = Math.floor(Math.random()*100 + 1);
    }
}

let users = [];

users.push(new user('admin', 'admin@usp.br', 'admin', '../resources/arara.jpg', 'Avenida trabalhador São Carlense 5000', '(16) 9 98765432', true));
users.push(new user('client', 'client@usp.br', 'client', '../resources/user.jpg', 'Avenida trabalhador São Carlense 5000', '(16) 9 91234567', false));

export const auth = (email, passwd) => {
    if(users.filter(u => u.email === email)[0].passwd === passwd){
        return users.filter(u => u.email === email)[0].token;
    }else{
        return null;
    }
}

export const checkToken = token => {
    if(token && users.filter(x => x.token)){
        return true;
    }else{
        return false;
    }
}