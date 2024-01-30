let dataset =
{
    "ProductID": "Wired Headphones",
    "AAA Batteries (4-pack)": "86",
    "AA Batteries (4-pack)": "83",
    "USB-C Charging Cable": "204",
    "Lightning Charging Cable": "129",
    "Bose SoundSport Headphones": "74",
    "Wired Headphones": "x",
    "Apple Airpods Headphones": "100",
    "20in Monitor": "19",
    "27in FHD Monitor": "22",
    "34in Ultrawide Monitor": "28",
    "27in 4K Gaming Monitor": "29",
    "Flatscreen TV": "11",
    "iPhone": "462",
    "Google Phone": "422",
    "Vareebadd Phone": "149",
    "Macbook Pro Laptop": "20",
    "ThinkPad Laptop": "14",
    "LG Washing Machine": "4",
    "LG Dryer": "1"
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