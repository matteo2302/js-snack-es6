const squadre = [
  {
    nome: "Pero",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Roma",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Olbia",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Ventimiglia",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Loano",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Garbagnate",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Tempio",
    puntifatti: 0,
    fallisubiti: 0,
  },
  {
    nome: "Rho",
    puntifatti: 0,
    fallisubiti: 0,
  },
];
let nomeepunti = [];
squadre.forEach((squadra) => {
  squadra.puntifatti = Math.floor(Math.random() * 50 + 1);
  squadra.fallisubiti = Math.floor(Math.random() * 20 + 1);
  const { nome, fallisubiti } = squadra;
  nomeepunti.push(nome, fallisubiti);
});

console.log(squadre);
console.log(nomeepunti);
