const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let messagePromt = document.getElementById('promptM');
let gridBtn = document.getElementById('gridBtn');

//Button action listener for the grid generation
gridBtn.addEventListener('click',()=>{
    let num = Number(prompt("Please enter a grid number:", 16));
    if(num==null||num==""){
        messagePromt.textContent = "Please enter something.";
    }
    else if(num>100){
        messagePromt.textContent = "Grids must be less than 100.";
    }
    else{
        //reset();
        defaultGrid(num,num);
    }
});


// Creates a default grid sized 16x16
function defaultGrid(row, col) {
    makeRows(row);
    makeColumns(col);
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
            newCol.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
            rows[j].appendChild(newCol).className= "cell";
        }
    }
    //colorChangeOnHover();
};


//Generate the random color
function randColor(){
    let colorCode = '0123456789ABCDEF';
    let color = '#'
    for(let i=0; i<6;i++){
        color+= colorCode[Math.floor(Math.random()*16)];
    }
    return color;
}

function colorChangeOnHover(){
    let items = document.querySelectorAll('.cell');
    items.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            item.style.backgroundColor = `${randColor()}`;
        });
    });
}

function reset() {
    // document
    //   .querySelectorAll(".cell")
    //   .forEach((e) => e.parentNode.removeChild(e));

      let cells = document.querySelector('.cell');
      while (cells.firstChild) {
        cells.removeChild(cells.firstChild)
    }

  }
