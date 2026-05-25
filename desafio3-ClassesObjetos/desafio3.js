class Heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  attack() {
    let attackType;

    if (this.type === "Gerudo") {
      attackType = "katana";
    } else if (this.type === "Goron") {
      attackType = "pedras";
    } else if (this.type === "Zora") {
      attackType = "bolhas";
    } else if (this.type === "Hylian") {
      attackType = "master sword";
    }
    console.log(`O ${this.name} atacou usando ${attackType}`);
  }
}

let heroi1 = new Heroi("Link", 18, "Hylian");
let heroi2 = new Heroi("Impa", 102, "Gerudo");

heroi1.attack();
heroi2.attack();
