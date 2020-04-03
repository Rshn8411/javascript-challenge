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

// Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

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
