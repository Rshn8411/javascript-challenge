// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Display the entire dataset as default

tableData.forEach((renderTable) => {
    console.log(renderTable);
    var row = tbody.append("tr");

    Object.entries(renderTable).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the submit button
var filter = d3.select("#filter-btn");

//Event listener for datetime filter
filter.on("click", function() {

// Remove existing table and keep page from refreshing
d3.select("tbody").html("");
d3.event.preventDefault();

// Get the various properties of the selected elements
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

var citySelect = d3.select("#city").property("value").toLowerCase();
console.log(citySelect);

var stateSelect = d3.select("#state").property("value").toLowerCase();
console.log(stateSelect);

var country = d3.select("#country").property("value").toLowerCase();
console.log(country);

var shape = d3.select("#shape").property("value").toLowerCase();
console.log(dateTime);

var filteredData = tableData;

// Filter reports
if(dateTime){
  filteredData = tableData.filter(record => record.datetime === dateTime);
}
if(citySelect){
  filteredData = tableData.filter(record => record.city === citySelect);
}
if(stateSelect){
  filteredData = tableData.filter(record => record.state === stateSelect);
}
if(country){
  filteredData = tableData.filter(record => record.country === country);
}
if(shape){
  filteredData = tableData.filter(record => record.shape === shape);
}

// Display the filtered dataset
filteredData.forEach((renderTable) => {
    var row = tbody.append('tr');

    Object.entries(renderTable).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});
