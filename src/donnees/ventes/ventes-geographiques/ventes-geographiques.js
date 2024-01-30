let dataset = [
  {
    "City": " Atlanta",
    "State": "GA",
    "Sales": 14881
  },
  {
    "City": " Austin",
    "State": "TX",
    "Sales": 9905
  },
  {
    "City": " Boston",
    "State": "MA",
    "Sales": 19934
  },
  {
    "City": " Dallas",
    "State": "TX",
    "Sales": 14820
  },
  {
    "City": " Los Angeles",
    "State": "CA",
    "Sales": 29605
  },
  {
    "City": " New York",
    "State": "NY",
    "Sales": 24876
  },
  {
    "City": " Portland",
    "State": "OR",
    "Sales": 12465
  },
  {
    "City": " San Francisco",
    "State": "CA",
    "Sales": 44732
  },
  {
    "City": " Seattle",
    "State": "WA",
    "Sales": 14732
  }
 ];

let cities = [], states = [], sales = [], latitude = [], longitude = [];

for (let i = 0; i < dataset.length; i++) {
  cities.push(dataset[i].City.trim());
  states.push(dataset[i].State);
  sales.push(dataset[i].Sales);
}

d3.csv('https://raw.githubusercontent.com/kelvins/US-Cities-Database/main/csv/us_cities.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var cityName = unpack(rows, 'CITY'),
        cityState = unpack(rows, 'STATE_CODE'),
        cityLat = unpack(rows, 'LATITUDE'),
        cityLon = unpack(rows, 'LONGITUDE'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [],
        scale = 500;
    
    for (let i = 0; i < cities.length; i++) {
      for (let j = 0; j < cityName.length; j++) {
        if (cities[i] == cityName[j].trim() && states[i] == cityState[j]) {
          longitude.push(cityLon[j]);
          latitude.push(cityLat[j]);
          break;
        }
      }
    }
    for ( var i = 0 ; i < sales.length; i++) {
        var currentSize = sales[i] / scale;
        var currentText = `${cities[i]}, ${states[i]}\nVentes : ${sales[i]}`;
        citySize.push(currentSize);
        hoverText.push(currentText);
    }

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: latitude,
        lon: longitude,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

    Plotly.newPlot("visHolder", data, layout, {showLink: false});

});
