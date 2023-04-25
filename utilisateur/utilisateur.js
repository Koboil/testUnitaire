//nom prenom age mail
class User {
  constructor(nom, prenom,mail, age) {
    this.name = nom;
    this.email = mail;
    this.prenom = prenom;
    this.age = age;
  };
  display(){
    return(`${this.name} - ${this.prenom} : ${this.age} ans | ${this.email}`);
  };
  isMailValid(){
    if(this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return true;
  };
};
module.exports = User;  