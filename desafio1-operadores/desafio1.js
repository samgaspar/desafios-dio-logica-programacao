const nomeHeroi = "Link";
let xpNum = 80000;
let xpType;

/*IF, ELSE, ELSE IF*/
if (xpNum <= 1000) {
  xpType = "Ferro";
} else if (xpNum <= 2000) {
  xpType = "Bronze";
} else if (xpNum <= 5000) {
  xpType = "Prata";
} else if (xpNum <= 7000) {
  xpType = "Ouro";
} else if (xpNum <= 8000) {
  xpType = "Platina";
} else if (xpNum <= 9000) {
  xpType = "Ascendente";
} else if (xpNum <= 10000) {
  xpType = "Imortal";
} else if (xpNum > 10000) {
  xpType = "Radiante";
}
console.log("O herói de nome", nomeHeroi, "está no nível de", xpType);

/*ou SWITH, CASE, DEFAULT
switch (true) {
  case xpNum <= 1000:
    xpType = "Ferro";
    break;

  case xpNum <= 2000:
    xpType = "Bronze";

    break;
  case xpNum <= 5000:
    xpType = "Prata";

    break;
  case xpNum <= 7000:
    xpType = "Ouro";

    break;
  case xpNum <= 8000:
    xpType = "Platina";

    break;
  case xpNum <= 9000:
    xpType = "Ascendente";

    break;
  case xpNum <= 10000:
    xpType = "Imortal";

    break;
  default:
    xpType = "Radiante";
}
console.log("O herói de nome", nomeHeroi, "está no nível de", xpType);*/
