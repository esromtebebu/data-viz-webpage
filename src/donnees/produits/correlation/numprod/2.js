let dataset =
{
    "ProductID": "AA Batteries (4-pack)",
    "AAA Batteries (4-pack)": "87",
    "AA Batteries (4-pack)": "x",
    "USB-C Charging Cable": "75",
    "Lightning Charging Cable": "106",
    "Bose SoundSport Headphones": "55",
    "Wired Headphones": "83",
    "Apple Airpods Headphones": "70",
    "20in Monitor": "16",
    "27in FHD Monitor": "26",
    "34in Ultrawide Monitor": "32",
    "27in 4K Gaming Monitor": "26",
    "Flatscreen TV": "21",
    "iPhone": "32",
    "Google Phone": "25",
    "Vareebadd Phone": "12",
    "Macbook Pro Laptop": "17",
    "ThinkPad Laptop": "17",
    "LG Washing Machine": "1",
    "LG Dryer": "6"
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