const gridSide=500;
let squaresPerSide=16;
let selectedButton='black';
let click=true;
const sketchArea=document.querySelector('#sketch-area');
const resetButton=document.querySelector('#reset-button');
const redButton=document.querySelector('#red');
const blackButton=document.querySelector('#black');
const randomButton=document.querySelector('#random');

redButton.addEventListener('click',()=>{
    selectedButton='red'
});
blackButton.addEventListener('click',()=>{
    selectedButton='black'
});
randomButton.addEventListener('click',()=>{
    selectedButton='random'
});
function createGridCells(){
    sketchArea.innerHTML='';
        for(let i=0;i<squaresPerSide*squaresPerSide;i++){
            const gridCell=document.createElement('div');
            gridCell.style.width=gridCell.style.height=`${gridSide/squaresPerSide}px`
            gridCell.classList.add('cell');
            gridCell.style.backgroundColor='white'
            gridCell.addEventListener('mouseover',()=>{
                if(click)
                {
                    if(selectedButton==='random'){
                        gridCell.style.backgroundColor=getRandomColor();
                    }   
                    else{
                        gridCell.style.backgroundColor=selectedButton;

                    }
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
document.addEventListener('click',()=>{
    click=!click;
})
createGridCells();
