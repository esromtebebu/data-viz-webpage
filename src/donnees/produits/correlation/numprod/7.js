let dataset =
{
    "ProductID": "Apple Airpods Headphones",
    "AAA Batteries (4-pack)": "81",
    "AA Batteries (4-pack)": "70",
    "USB-C Charging Cable": "63",
    "Lightning Charging Cable": "116",
    "Bose SoundSport Headphones": "50",
    "Wired Headphones": "100",
    "Apple Airpods Headphones": "x",
    "20in Monitor": "13",
    "27in FHD Monitor": "24",
    "34in Ultrawide Monitor": "14",
    "27in 4K Gaming Monitor": "22",
    "Flatscreen TV": "13",
    "iPhone": "373",
    "Google Phone": "21",
    "Vareebadd Phone": "12",
    "Macbook Pro Laptop": "19",
    "ThinkPad Laptop": "16",
    "LG Washing Machine": "1",
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