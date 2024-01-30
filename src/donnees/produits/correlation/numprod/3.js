let dataset =
{
    "ProductID": "USB-C Charging Cable",
    "AAA Batteries (4-pack)": "95",
    "AA Batteries (4-pack)": "75",
    "USB-C Charging Cable": "x",
    "Lightning Charging Cable": "100",
    "Bose SoundSport Headphones": "102",
    "Wired Headphones": "204",
    "Apple Airpods Headphones": "63",
    "20in Monitor": "25",
    "27in FHD Monitor": "43",
    "34in Ultrawide Monitor": "26",
    "27in 4K Gaming Monitor": "23",
    "Flatscreen TV": "17",
    "iPhone": "29",
    "Google Phone": "997",
    "Vareebadd Phone": "368",
    "Macbook Pro Laptop": "21",
    "ThinkPad Laptop": "20",
    "LG Washing Machine": "",
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