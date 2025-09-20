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
class Admin extends user {
    editData(){
        console.log("You have the access to edit the data");
    }
}
let user1 = new user ("John Cena", "admincena@gmail.com");
user1.viewData();
let admin1 = new Admin ("The Rock", "admin@hotmail.com");
admin1.viewData();
admin1.editData();