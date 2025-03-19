const gridSide=500;
let squaresPerSide=16;

const sketchArea=document.querySelector('#sketch-area');
const resetButton=document.querySelector('#reset-button');

function createGridCells(){
    sketchArea.innerHTML='';
        for(let i=0;i<squaresPerSide*squaresPerSide;i++){
            const gridCell=document.createElement('div');
            gridCell.style.width=gridCell.style.height=`${gridSide/squaresPerSide}px`
            gridCell.classList.add('cell');
            gridCell.style.backgroundColor='white'
            let color=getRandomColor();
            let darknessFactor=0;
            gridCell.addEventListener('mouseover',()=>{
                if(darknessFactor<1){
                    darknessFactor+=0.1;
                    gridCell.style.backgroundColor=darknessColor(color,darknessFactor);
                }
            });
            sketchArea.appendChild(gridCell);
        }
}


function getRandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}

function darknessColor(color,darknessFactor){
    let [r,g,b]=color.match(/\d+/g).map(Number);
    r=Math.max(0,Math.floor(r*(1-darknessFactor)));
    g=Math.max(0,Math.floor(g*(1-darknessFactor)));
    b=Math.max(0,Math.floor(b*(1-darknessFactor)));
    return`rgb(${r},${g},${b})`;
}
resetButton.addEventListener('click',()=>{
    let newSize=parseInt(prompt('Enter the number of squares per side(max100):'))
    if(newSize>=1 && newSize<=100){
        squaresPerSide=newSize;
        createGridCells();

    }
    else{
        alert('Invalid input!Please enter a number between 0 and 100')
    }
});
