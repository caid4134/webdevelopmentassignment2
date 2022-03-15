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
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 

    if (cols.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }

    else{
        
    }
    

    

    
}

//Removes a row
function removeR() {
    document.getElementById("grid").deleteRow(0);
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
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
