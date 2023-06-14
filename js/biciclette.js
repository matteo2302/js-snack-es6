console.log("JSOK");
const bicycles = [
  {
    name: "Gianfranco",
    weight: 40,
  },
  {
    name: "Pierluigi",
    weight: 38,
  },
  {
    name: "Rachele",
    weight: 35,
  },
  {
    name: "Benedetta",
    weight: 50,
  },
  {
    name: "Marcella",
    weight: 70,
  },
  {
    name: "Pietrina",
    weight: 65,
  },
  {
    name: "Matteo",
    weight: 80,
  },
];
let lightbicycle = bicycles[0];
for (const bicycle of bicycles) {
  const { name, weight } = bicycle;
  if (weight < lightbicycle.weight) {
    lightbycicle = bicycle;
  }
}

console.log(lightbicycle);
// const fatBibycle = bicycles.forEach((weight) => {
//   fatBibycle = weight;
//   if (fatBibycle > weight) {
//     fatBibycle = weight;
//   }
// });
// console.log(fatBibycle);
