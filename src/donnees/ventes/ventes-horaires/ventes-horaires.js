let dataset = [
    {
      "Horaire": "0:00 à 1:00",
      "Quantité": 4428
    },
    {
      "Horaire": "1:00 à 2:00",
      "Quantité": 2619
    },
    {
      "Horaire": "2:00 à 3:00",
      "Quantité": 1398
    },
    {
      "Horaire": "3:00 à 4:00",
      "Quantité": 928
    },
    {
      "Horaire": "4:00 à 5:00",
      "Quantité": 937
    },
    {
      "Horaire": "5:00 à 6:00",
      "Quantité": 1493
    },
    {
      "Horaire": "6:00 à 7:00",
      "Quantité": 2810
    },
    {
      "Horaire": "7:00 à 8:00",
      "Quantité": 4556
    },
    {
      "Horaire": "8:00 à 9:00",
      "Quantité": 7002
    },
    {
      "Horaire": "9:00 à 10:00",
      "Quantité": 9816
    },
    {
      "Horaire": "10:00 à 11:00",
      "Quantité": 12308
    },
    {
      "Horaire": "11:00 à 12:00",
      "Quantité": 14005
    },
    {
      "Horaire": "12:00 à 13:00",
      "Quantité": 14202
    },
    {
      "Horaire": "13:00 à 14:00",
      "Quantité": 13685
    },
    {
      "Horaire": "14:00 à 15:00",
      "Quantité": 12362
    },
    {
      "Horaire": "15:00 à 16:00",
      "Quantité": 11391
    },
    {
      "Horaire": "16:00 à 17:00",
      "Quantité": 11662
    },
    {
      "Horaire": "17:00 à 18:00",
      "Quantité": 12229
    },
    {
      "Horaire": "18:00 à 19:00",
      "Quantité": 13802
    },
    {
      "Horaire": "19:00 à 20:00",
      "Quantité": 14470
    },
    {
      "Horaire": "20:00 à 21:00",
      "Quantité": 13768
    },
    {
      "Horaire": "21:00 à 22:00",
      "Quantité": 12244
    },
    {
      "Horaire": "22:00 à 23:00",
      "Quantité": 9899
    },
    {
      "Horaire": "23:00 à 24:00",
      "Quantité": 7065
    }
   ];
   
  let abscisses = [];
  let ordonnees = [];
  
  for (let i = 0; i < dataset.length; i++) {
    abscisses.push(dataset[i].Horaire);
    ordonnees.push(dataset[i].Quantité);
  }
  
  let data = [
    {
      x: abscisses,
      y: ordonnees,
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('visHolder', data);