/* Initialize Variables */

var employeeNum = 0;
var overall_pay = 0;
var hours_weeked;
var employee_pay;
var earnings = [];
var weekly_pay = [];

for (var employee = 0; employee < 1000; employee++) 
{ /* Initialize number of employeeloyees set maximum to 1000  */
    hours_weeked = parseFloat(prompt("Please enter the number of hours worked: " + (employee + 1) + " employee", "Entry: employee Number " + (employee + 1)));
    
    if (employeeNum == 0 && hours_weeked < 0)
	{ //handle hour input 
        alert("Please enter hours for at least 1 employee.");
        break;
    } 
    else 
	{ // quit on negative numbers to handle -1 case 
        if (0 <= hours_weeked) 
		{ 
	        /* Handle general case */
            earnings[employee] = hours_weeked; // enter earnings 
            employeeNum = employeeNum + 1; // inc employee count 
            
			if(40 > earnings[employee]) 
			{
                //if earnings < 40 then $15 per hour
                employee_pay = earnings[employee] * 15;
                weekly_pay[employee] = employee_pay;
                // build pay array
            }
            else if (earnings[employee] >= 40)
			{ /* if earnings > 40 then pay is 1.5 times normal pay. */
                employee_pay = 40 * 15 + (earnings[employee] - 40) * (15 + 15 / 2);
                weekly_pay[employee] = employee_pay;
                // build weekly pay array
            }
			/* add to total pay */
            overall_pay = overall_pay + weekly_pay[employee];
        }
        else 
            break; // for negative cases break out.
        
    }
}

/* initialize row and column variables */
var row;
var column;

var table = document.createElement("Table");
table.setAttribute("border", "1px");
row = table.insertRow(ii);
column = row.insertCell(0);
column.innerHTML = "Num";
column.setAttribute("class", "th");
column = row.insertCell(1);
column.innerHTML = "Hours worked";
column.setAttribute("class", "th");
column = row.insertCell(2);
column.innerHTML = "Employee's pay for the Week";
column.setAttribute("class", "th");


for (var ii = 0; ii < employeeNum; ii++) 
{ // loop for number of rows
/* Build the pay table */

    row = table.insertRow(ii + 1); 

    column = row.insertCell(0);
    column.innerHTML = (ii + 1);

    column = row.insertCell(1);
    column.innerHTML = earnings[ii];

    column = row.insertCell(2);
    column.innerHTML = weekly_pay[ii];
}

var div = document.getElementById("table"); 
div.appendChild(table); 
document.getElementById("overall_pay").innerHTML = overall_pay; 