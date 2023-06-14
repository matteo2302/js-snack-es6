const bicycles = [
  {
    name: "Gianfranco",
    weight: 40,
    height: 80,
  },
  {
    name: "Pierluigi",
    weight: 38,
    height: 90,
  },
  {
    name: "Rachele",
    weight: 35,
    height: 50,
  },
  {
    name: "Benedetta",
    weight: 50,
    height: 40,
  },
  {
    name: "Marcella",
    weight: 70,
    height: 20,
  },
  {
    name: "Pietrina",
    weight: 65,
    height: 70,
  },
  {
    name: "Matteo",
    weight: 80,
    height: 60,
  },
];
let lightbicycle = bicycles[0];
for (const bicycle of bicycles) {
  const { weight } = bicycle;
  if (weight < lightbicycle.weight) {
    lightbicycle = bicycle;
  }
}

console.log(lightbicycle);
const { name, weight } = lightbicycle;
console.log(` la bici più leggere è quella di nome ${name} e pesa ${weight}`);
// const fatBibycle = bicycles.forEach((weight) => {
//   fatBibycle = weight;
//   if (fatBibycle > weight) {
//     fatBibycle = weight;
//   }
// });
// console.log(fatBibycle);
// for (let i = 0; i < bicycles.length; i++) {
//   bibycle = bicycles[i];
// }
// for (let property in lightbicycle) {
//   console.log("proprieta", lightbicycle[property]);
//   console.log("proprieta", property);
// }
// bicycles.forEach((ciao) => {});
// const bicleHeight = bicycles.map((bicycle) => {
//   return bicycle.height;
// });
// console.log("lalalala", bicleHeight);
