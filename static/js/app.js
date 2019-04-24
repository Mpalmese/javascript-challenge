// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildtable(arr) {
tbody.html("");
arr.forEach(function(ufo_sightings) {
    console.log(ufo_sightings);
    var row = tbody.append("tr");

    Object.entries(ufo_sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
};

buildtable(tableData);

var filter = d3.select("#filter-btn");

filter.on("click", function() {
    d3.event.preventDefault();

    
    

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
    if (inputValue) {
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);
    
    buildtable(filteredData);
    
    } 
    else {
        buildtable(tableData);
    };
    //tbody.style("display", "");
    
    

});



