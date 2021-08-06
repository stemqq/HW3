//
//File: table.js
//GUI Assignment: Multiplication table generator
//Ssuna Mulindwa, UMass Lowell Computer Science, ssuna_mulindwa@student.uml.edu
//Copyright (c) 2021 by ssunaMulindwa. All rights reserved. May be freely copied or
//excerpted for educational purposes with credit to the author.
//updated by SM on July 31, 2021 at 9:23 AM
//



function myFunction() {
    //variable for First/Last Column, First/Last Row
    var fCol, lCol, fRow, lRow;
    // use parseInt to get value as number from html input
    fCol = document.getElementById("inputNum1").value;  //First Column
    lCol = document.getElementById("inputNum2").value;  //Last Column
    fRow = document.getElementById("inputNum3").value;  //First Row
    lRow = document.getElementById("inputNum4").value;  //Last Row

    // check the input
    if (checkvalidform(fCol, lCol, fRow, lRow)) {
        // create table if the input passed the checkvalidform
        tableCreate(fCol, lCol, fRow, lRow);
    } else {
        // print empty table if failed to pass the checkvalid form
        document.getElementById('table').innerHTML = "";
    }
}


// if there is any error, it will disply and
function checkvalidform(fCol, lCol, fRow, lRow){
    // make error id be empty first
    document.getElementById('errorMessage').innerHTML = "";

    // Define variables for checking errors
    var colError1, colError2, rowError1, rowError2, valError1, valError2;

    // define and declare variable for errorMessage tag and set it is empty
    var errorMess = "";

    // check if it is empty string
    if (fCol == "") {
        colError1 = true;
        errorMess += "Please enter a numerical for 'Min Column Value'<br>";
    // check if it is integer
    } else if (Number(fCol) % 1 == 0 ) {
        colError1 = false;
    // else need to be integer
    } else {
        colError1 = true;
        errorMess += "Please enter a numerical value for 'Min Column Value'<br>";
    }


    // check if it is empty string
    if (lCol == "") {
        colError2 = true;
        errorMess += "Please enter a value for 'Max Column Value'<br>";
    // check if it is integer
    } else if (Number(lCol) % 1 == 0 ) {
        colError2 = false;
    // else need to be integer
    } else {
        colError2 = true;
        errorMess += "Please enter a numerical for'Max Column Value'<br>";
    }


    // check if it is empty string
    if (fRow == "") {
        rowError1 = true;
        errorMess += "Please enter a value for 'Min Row Value'<br>";
    // check if it is integer
    } else if (Number(fRow) % 1 == 0 ) {
        rowError1 = false;
    // else need to be integer
    } else {
        rowError1 = true;
        errorMess += "Please enter a numerical value for 'Min Row Value'<br>";
    }


    // check if it is empty string
    if (lRow == "") {
        rowError2 = true;
        errorMess += "Please enter a value for 'Max Row Value'<br>";
    // check if it is integer
    } else if (Number(lRow) % 1 == 0 ) {
        rowError2 = false;
    // else need to be integer
    } else {
        rowError2 = true;
        errorMess += "Please enter a numerical for 'Max Row Value'<br>";
    }

    // Check the max value bigger than min value for Column
    if (Number(fCol) % 1 == 0 && Number(lCol) % 1 == 0){
        //console.log("%O,  %O" ,fCol, lCol);
        if(Number(fCol) > Number(lCol)) {
            valError1 =  true;
            errorMess += "'Max Row Value' value can't smaller than 'Min Row Value' value <br>";
        } else {
            valError1 = false;
        }
    }

    // Check the max value bigger than min value for Row
    if (Number(fRow) % 1 == 0 && Number(lRow) % 1 == 0){
        //console.log("%O,  %O" ,fCol, lCol);
        if(Number(fRow) > Number(lRow)) {
            valError2 =  true;
            errorMess += "'Max Row Value' value can't smaller than 'Min Row Value' value <br>";
        } else {
            valError2 = false;
        }
    }

    // or logical to return true or false
    if (colError1 || colError2 || rowError1 || rowError2 || valError1 || valError2 == true){
        // print out the Error Message
        document.getElementById('errorMessage').innerHTML = "<br><font color=#FF0000> Error Detected:</font><br>" + errorMess;
        return false;
    } else {
        return true;
    }
}

// function to create dynamic table based on input from the users after passes the valid check
function tableCreate(fCol, lCol, fRow, lRow) {
    // cast all variable to Number for calculation to print out the dynamic table
    fCol = Number(fCol);
    lCol = Number(lCol);
    fRow = Number(fRow);
    lRow = Number(lRow);

    // define and declare variable for CreateTable tag and set it is empty
    var CreateTable = "";
    // check variable use for determine when is the cell have background corlor or not
    var check = 0;
    CreateTable += "<table id='style-table'>";

    // create table with rows based on input
    for (var row = 0; row <= (lRow - fRow + 1); row++){
        // open table tag
        CreateTable += "<tr>";
        // for create cell for each row (like column)
        for (var col = 0; col <= (lCol - fCol + 1); col++){

            // if the cell is on first row and first column, empty space, else css style will be first
            if (row == 0){
                CreateTable += "<td class='header'>" + ((col == 0) ? "" : (col + fCol - 1)) + "</td>";
            // if cell fall in first column, css style will be first
            } else if (col == 0){
                CreateTable += "<td class='header'>" + (row + fRow - 1) + "</td>";
            // the rest of cell in the table with rest style
            } else {
                // cell background based on check variable
                CreateTable += ((Number(check) % 2 == 0) ? "<td class='child-blank'>"  : "<td class='child-color'>") + ((row + fRow - 1) * (col + fCol - 1)) + "</td>";
                // increase check by 1
                check++;
            }
        }
        // reset check based on row to determind 0 or 1
        row % 2 == 0 ? check = 0 : check = 1;
        // closed row tag
        CreateTable += "</tr>";
    }
    // closed table tag
    CreateTable += "</table>";

    // Print out the Dynamic table
    document.getElementById('table').innerHTML = CreateTable;
}
