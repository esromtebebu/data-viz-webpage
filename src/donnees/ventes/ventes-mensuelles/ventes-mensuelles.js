let dataset = [
  {
    "Month": "January",
    "Sales": 14570
  },
  {
    "Month": "February",
    "Sales": 14622
  },
  {
    "Month": "March",
    "Sales": 16849
  },
  {
    "Month": "April",
    "Sales": 19056
  },
  {
    "Month": "May",
    "Sales": 18255
  },
  {
    "Month": "June",
    "Sales": 15832
  },
  {
    "Month": "July",
    "Sales": 16536
  },
  {
    "Month": "August",
    "Sales": 15025
  },
  {
    "Month": "September",
    "Sales": 14601
  },
  {
    "Month": "October",
    "Sales": 20872
  },
  {
    "Month": "November",
    "Sales": 18508
  },
  {
    "Month": "December",
    "Sales": 24353
  }
 ]
 
let abscisses = [];
let ordonnees = [];

for (let i = 0; i < dataset.length; i++) {
  abscisses.push(dataset[i].Month);
  ordonnees.push(dataset[i].Sales);
}

let data = [
  {
    x: abscisses,
    y: ordonnees,
    type: 'bar'
  }
];

Plotly.newPlot('visHolder', data);