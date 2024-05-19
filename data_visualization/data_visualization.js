// https://data.cityofnewyork.us/dataset/DSNY-Waste-Characterization-2023-Subsort-Results/pum2-pec2/about_data
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Plastic", "Glass", "Metal", "Paper", "Electronics", "Organics", "Household Hazard Waste", "Construction & Debris", "Miscellaneous"],
      datasets: [
        {
          label: "Quantity",
          backgroundColor: ["#7209B7", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00", "#CA6702", "#BB3E03", "#AE2012", "#ae2012"],
          data: [12826,1540,1408,924,506,484,374,66,44]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Department of Sanitation Waste Characterization by Main Material (2023)'
      }
    }
});
// https://nces.ed.gov/programs/coe/indicator/cpb/college-enrollment-rate
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["2010", "2011", "2012", "2013","2015","2016", "2017", "2018", "2019","2020","2021"],
      datasets: [
        {
          label: "4-year",
          backgroundColor: "#005F73",
          data: [28,30,28,28,29,30,31,30,31,30,31,30]
        }, {
          label: "2-year",
          backgroundColor: "#EE9B00",
          data: [13,12,13,12,11,11,10,10,10,10,9,8]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'College Enrollment Rates of 18- to 24-year-olds by Institution Level (2010-2021)'
      }
    }
});

