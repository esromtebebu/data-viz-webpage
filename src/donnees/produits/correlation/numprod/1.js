let dataset =
    {
      "ProductID": "AAA Batteries (4-pack)",
      "AAA Batteries (4-pack)": "x",
      "AA Batteries (4-pack)": "87",
      "USB-C Charging Cable": "95",
      "Lightning Charging Cable": "80",
      "Bose SoundSport Headphones": "57",
      "Wired Headphones": "86",
      "Apple Airpods Headphones": "81",
      "20in Monitor": "11",
      "27in FHD Monitor": "43",
      "34in Ultrawide Monitor": "25",
      "27in 4K Gaming Monitor": "30",
      "Flatscreen TV": "21",
      "iPhone": "31",
      "Google Phone": "22",
      "Vareebadd Phone": "6",
      "Macbook Pro Laptop": "18",
      "ThinkPad Laptop": "27",
      "LG Washing Machine": "4",
      "LG Dryer": "2"
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