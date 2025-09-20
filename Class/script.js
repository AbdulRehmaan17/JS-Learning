class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(this.name);
        console.log(this.email);
    }
}

let user1 = new user("John Cena", "johnCena@gmail.com");
user1.viewData();