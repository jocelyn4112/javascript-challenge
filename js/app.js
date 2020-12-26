//var csv is the CSV file with headers
function csvJSON(cleaned_ufo_data.csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }
  
  
  // from data.js
const tableData = data;
console.log(tableData)

// Use D3 to select the table body
const tbody = d3.select("tbody");

//Build Table
function buildtable(data){

    tbody.html("");
    data.forEach(element => {

        // Append one table row `tr` to the table body
        var row = tbody.append("tr");
        // Grab rows 
        Object.values(element).forEach((val) => {
            var rowData = row.append("td");
            rowData.text(val);

        });
    });
    console.log(data)
}





// Make Button
var button = d3.select("#filter-btn");
button.on("click", handleClick);

// Grab info we need 

function handleClick() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //var filterData = tableData.filter ()
    var filteredData = tableData.filter( sighting => sighting.datetime === inputValue);
    
    buildtable(filteredData);

}

buildtable(tableData);