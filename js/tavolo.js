console.log("jsok");
const invitati = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
let tavoloinvitati = [];
// for (let invitato of invitati) {
//   invitato = {
//     nome: [invitato],
//     numeroTavolo: [invitato],
//     nomeDelTavolo: [invitato],
//   };
//   tavoloinvitati.push(invitato);
// }
// console.table(tavoloinvitati);
invitati.forEach((invitato, i) => {
  invitato = {
    nome: invitato,
    numeroTavolo: i,
    nomeDelTavolo: "tavolo VIP",
  };
  tavoloinvitati.push(invitato);
});
console.log(tavoloinvitati);
