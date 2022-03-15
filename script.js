let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }

    //copy last row of the grid table
    else{
        let lastrow = document.getElementById("grid").lastChild;
        console.log(lastrow);
        //creating a new row
        let newrow = document.createElement("tr");
        
        newrow.innerHTML = lastrow.innerHTML;
        //appending copied row
        grid.appendChild(newrow);

    }



}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
    //for loop going to each row and adding a cell "looks like adding a col"
    else{
	    let cols = grid.rows[0].cells.length;
	    let newcell;
	    for(var i=0;i<grid.rows.length;i++){
		    newcell = grid.rows[i].insertCell(cols-1);
    	}
    }
    

    

    
}

//Removes a row
function removeR() {

    //stops if the table is empty
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if (rows.length === 1) {
        grid.innerHTML = "";
    }
    if (rows.length === 0) {
        return;
    }

    //deletes the last row since -1 is the last of the index
    document.getElementById("grid").deleteRow(-1);

}
//Remove a column
function removeC() {

    //stops if the table is empty
    let grid = document.getElementById("grid");
    let col = document.getElementsByTagName("td");
    if (col.length === 1) {
        grid.innerHTML = "";
    }
    if (col.length === 0) {
        return;
    }
    //just gonna inverse what i did earlier for adding cols
    let rows = document.getElementsByTagName("tr");

    let cols = grid.rows[0].cells.length;
	    let deletedcell;
	    for(var i=0;i<grid.rows.length;i++){
		    deletedcell = grid.rows[i].deleteCell(-1);
    	}
    }


//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
