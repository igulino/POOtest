
//criando a class úsuario

class User {
  constructor(Email, Senha){
      this.Email = Email,
      this.Senha = Senha
    };


  isAdmin(){
    return false
  }
}

class Admin extends User {
  constructor(Email, Senha, admin){
    super(Email, Senha);
    this.admin = true
  }
  isAdmin(){
    super.isAdmin();
    if(this.admin == true){
      return true
    }
  }
}

const ghost = new User('dst323@gmail.com', '2234');
const adm = new Admin('aaa980@gmail.com', 'kak');

console.log(ghost.isAdmin());
console.log(adm.isAdmin());
