let dataset =
{
    "ProductID": "Lightning Charging Cable",
    "AAA Batteries (4-pack)": "80",
    "AA Batteries (4-pack)": "106",
    "USB-C Charging Cable": "100",
    "Lightning Charging Cable": "x",
    "Bose SoundSport Headphones": "72",
    "Wired Headphones": "129",
    "Apple Airpods Headphones": "116",
    "20in Monitor": "26",
    "27in FHD Monitor": "36",
    "34in Ultrawide Monitor": "33",
    "27in 4K Gaming Monitor": "34",
    "Flatscreen TV": "22",
    "iPhone": "1012",
    "Google Phone": "28",
    "Vareebadd Phone": "4",
    "Macbook Pro Laptop": "21",
    "ThinkPad Laptop": "20",
    "LG Washing Machine": "6",
    "LG Dryer": "3"
  };
   
  let abscisses = [];
  let ordonnees = [];
  
 for (let i in dataset) {
    if (dataset[i] != "x" && i != "ProductID") {
        abscisses.push(i);
        ordonnees.push(dataset[i]);
    }
 }
  
  let data = [
    {
      x: abscisses,
      y: ordonnees,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('visHolder1', data);