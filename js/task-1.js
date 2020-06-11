class Account {
  constructor({ login, email } = obj) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, E-mail: ${this.email}`);
  }
}

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });
 poly.getInfo()
