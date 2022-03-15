let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    //console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }

    //copy last row of the grid table to add as a new row
    else{
        let lastrow = document.getElementById("grid").lastChild;
        //console.log(lastrow);
        //creating a new row
        let newrow = document.createElement("tr");
        
        newrow.innerHTML += lastrow.innerHTML;

        //cleaning the style background color that can be potentially copied over, this is could had been avoided
        //if i implemented the addrow function diffently
        var newcells = newrow.children;
        for (let i = 0; i < newcells.length; i++) {
            let tableChild = newcells[i];
            tableChild.style.backgroundColor="";
            }

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
	    let newcell;
	    for(let i=0;i<grid.rows.length;i++){
		    newcell = grid.rows[i].insertCell(-1);
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
	    for(let i=0;i<grid.rows.length;i++){
		    deletedcell = grid.rows[i].deleteCell(-1);
    	}
    }


//sets global let for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    //simple loop going through every cell to change their style
    let grid = document.getElementById("grid");
    for (let i = 0, row; row = grid.rows[i]; i++) {

        for (let j = 0, col; col = row.cells[j]; j++) {
            col.style.backgroundColor=colorSelected;
        }
    }

    //alert("Clicked Fill All")
}

function clearAll(){
        //reused the code from earlier but this time with "" for no color
        let grid = document.getElementById("grid");
        for (let i = 0, row; row = grid.rows[i]; i++) {
    
            for (let j = 0, col; col = row.cells[j]; j++) {
                col.style.backgroundColor="";
            }
        }
    //alert("Clicked Clear All")
}

function fillU(){
    //reused the code once again, this time just adding a check
    for (let i = 0, row; row = grid.rows[i]; i++) {

        for (let j = 0, col; col = row.cells[j]; j++) {
            if(col.style.backgroundColor===""){
            col.style.backgroundColor=colorSelected;
            }
        }
    }
    //alert("Clicked Fill All Uncolored")

}
