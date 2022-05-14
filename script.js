const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
defaultGrid();
// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes rows input and make a grid
function makeRows(rowNum) {
    // Creates rows
    for(let r=0; r<rowNum; r++){
        let newRow = document.createElement("div");
        container.appendChild(newRow).className="gridRow";
    }
};

// Creates columns
function makeColumns(cellNum) {
    for(let c=0; c<rows.length;c++){
        for(let j = 0; j<cellNum;j++){
            let newCol = document.createElement("div");
            rows[j].appendChild(newCol).className= "cell";
        }
    }
};
