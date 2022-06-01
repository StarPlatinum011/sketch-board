const container = document.getElementById("container");
let gridBtn = document.getElementById('gridBtn');
let num;
makeRows(36,36);
//Button action listener for the grid generation
gridBtn.addEventListener('click',()=>{
    num = Number(prompt("Please enter a grid number:", 36));
    if(num==null||num==""){
        alert("Please enter something.");
    }
    else if(num>50){
        alert("Number must be less than 50.");
    }
    else{
        reset();
        makeRows(num,num);
    }
});

//Generation of grid
function makeRows(rows=36, cols=36) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', function(e){
          e.target.style.backgroundColor='black';
      });
      container.appendChild(cell).className = "grid-item";
    };
  };

//Clear button 
let clearBtn = document.getElementById('clearGrid');
clearBtn.addEventListener('click', ()=>{
    reset();
    makeRows(num,num)
})
//resetting the grid
function reset() {
    document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));
  }

//rainbow button
let rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.addEventListener('click',()=>{
    colorChangeOnHover();
})

  //Generate the random color on grid
function randColor(){
    let colorCode = '0123456789ABCDEF';
    let color = '#'
    for(let i=0; i<6;i++){
        color+= colorCode[Math.floor(Math.random()*16)];
    }
    return color;
}

function colorChangeOnHover(){
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            item.style.backgroundColor = `${randColor()}`;
        });
    });
}

let blackPen = document.getElementById('black');
blackPen.addEventListener('click',()=>{
    blackOnHover();
});

function blackOnHover(){
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            item.style.backgroundColor = 'black';
        });
    });
}
