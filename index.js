let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#resetbtn");

let turnO = true;

const winningpaterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winningpaterns) {
   
    
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
       
    if(pos1val !="" && pos2val !="" && pos3val !=""){
         if(pos1val == pos2val && pos2val == pos3val ){
            document.getElementById('mssg').innerText="Player "+pos1val+" Won!";
            boxes.forEach((box) => {
              box.disabled = true;
            });

          }
          
             
  }
}
};



