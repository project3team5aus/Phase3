
console.log('data_hoops is: ', data_hoops);

var tableData = data_hoops;
console.log('tableData is: ', tableData);

// function to display today's date heading in HTML
function displayTodaysDateHeading(tableData) {
    date_html = tableData[0].date
    // access by div id="today-date-heading" from index.html file and populate with values from full_html variable
    return document.getElementById("today-date-heading").innerHTML = date_html;

}


// create function called makeTable that will make a table using HTML elements
// argument passed in is the array of data
function makeTable(tableData) {

console.log(tableData);

// create variable called table_html that will be used to make the 
// schools table using campus_name, address, and zipcode data from data.js

// start with making table border
var table_html = "<table border='1|1'>";

// use for loop with tableData to bring in elements for campus_name, address, and zipcode
for (var i = 0; i < tableData.length; i++) {
    //zsubhani01062019 var campus_designator = tableData[i].campus_id
    //zsubhani01062019 console.log('campus_designator is: ', campus_designator);
    //zsubhani01062019 var campus_link = '/campusdashboard/' + campus_designator
    var campus_link = '/today_predictions'
    console.log('campus_link is: ', campus_link);
    table_html+="<tr>";
    // add table data object and align in center for address
    table_html+="<td align='center'>"+tableData[i].time+"<br><br>"+tableData[i].location+"</td>";
    // add table data object and align in center for campus_name
    table_html+="<td align='center'>"+"<div class='col-sm'>"+"<figure class='figure center rounded border-success'>"+"<img class='center team-logo' src="+tableData[i].road_team_logo+">"+"<figcaption class='figure-caption text-center'>"+tableData[i].road_team+"</figcaption>"+"</figure>"+"</div>"+"</td>";
    //table_html+="<td align='center'>"+"<a href="+campus_link+" target='_blank'>"+tableData[i].date+"</a>"+"</td>";
    table_html+="<td align='center'>"+'AT'+"</td>";
    // add table data object and align in center for address
    //table_html+="<td align='center'>"+tableData[i].home_team+"</td>";
    table_html+="<td align='center'>"+"<div class='col-sm'>"+"<figure class='figure center rounded border-success'>"+"<img class='center team-logo' src="+tableData[i].home_team_logo+">"+"<figcaption class='figure-caption text-center'>"+tableData[i].home_team+"</figcaption>"+"</figure>"+"</div>"+"</td>";
    // add table data object and align in center for zipcode
    //table_html+="<td align='center'>"+tableData[i].home_team+"</td>";
    // end of row
    table_html+="</tr>";

}
// end of table creation
table_html+="</table>";
// create a full html variable to add column headers (School Name, Address, Zipcode) to the table_html we just created
full_html = "<thead><tr><td align='center'><strong>Game Info</strong></td><td align='center'><strong>Road Team</strong></td><th></th><td align='center'><strong>Home Team</strong></td></tr></thead>" + table_html;

// access by table id="games-table" from index.html file and populate with values from full_html variable
return document.getElementById("games-table").innerHTML = full_html;

}

// call function makeTable to render table on HTML page
displayTodaysDateHeading(tableData);

// call function makeTable to render table on HTML page
makeTable(tableData);


