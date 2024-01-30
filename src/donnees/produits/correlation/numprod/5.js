let dataset =
{
    "ProductID": "Bose SoundSport Headphones",
    "AAA Batteries (4-pack)": "57",
    "AA Batteries (4-pack)": "55",
    "USB-C Charging Cable": "102",
    "Lightning Charging Cable": "72",
    "Bose SoundSport Headphones": "x",
    "Wired Headphones": "74",
    "Apple Airpods Headphones": "50",
    "20in Monitor": "15",
    "27in FHD Monitor": "26",
    "34in Ultrawide Monitor": "17",
    "27in 4K Gaming Monitor": "19",
    "Flatscreen TV": "13",
    "iPhone": "12",
    "Google Phone": "228",
    "Vareebadd Phone": "82",
    "Macbook Pro Laptop": "15",
    "ThinkPad Laptop": "13",
    "LG Washing Machine": "2",
    "LG Dryer": ""
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