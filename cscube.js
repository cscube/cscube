var cube = {              U1:"W1",U2:"W2",
                          U3:"W3",U4:"W4",
            L1:"O1",L2:"O2",F1:"G1",F2:"G2",R1:"R1",R2:"R2",
            L3:"O3",L4:"O4",F3:"G3",F4:"G4",R3:"R3",R4:"R4",
                          D1:"Y1",D2:"Y2",
                          D3:"Y3",D4:"Y4",
            B1:"B1",B2:"B2",
            B3:"B3",B4:"B4"
        };
const solvedCube= JSON.parse(JSON.stringify(cube));
var moveStack=new Array();      
  function R() {
            let oldF2 = cube.F2;
            let oldF4 = cube.F4;
            cube.F2 = cube.D2;
            cube.F4 = cube.D4;
            cube.D2 = cube.B2;
            cube.D4 = cube.B4;
            cube.B2 = cube.U2;
            cube.B4 = cube.U4;
            cube.U2 = oldF2;
            cube.U4 = oldF4;
            let oldR1 = cube.R1;
            cube.R1 = cube.R3;
            cube.R3 = cube.R4;
            cube.R4 = cube.R2;
            cube.R2 = oldR1;
            moveStack.push("R");
            }
  function RP() {
            let oldF2 = cube.F2;
            let oldF4 = cube.F4;
            cube.F2 = cube.U2;
            cube.F4 = cube.U4;
            cube.U2 = cube.B2;
            cube.U4 = cube.B4;
            cube.B2 = cube.D2;
            cube.B4 = cube.D4;
            cube.D2 = oldF2;
            cube.D4 = oldF4;            
            let oldR1 = cube.R1;
            cube.R1 = cube.R2;
            cube.R2 = cube.R4;
            cube.R4 = cube.R3;
            cube.R3 = oldR1;
            moveStack.push("RP");
            }
    function L() {
        let oldF1 = cube.F1;
        let oldF3 = cube.F3;
        cube.F1 = cube.U1;
        cube.F3 = cube.U3;
        cube.U1 = cube.B1;
        cube.U3 = cube.B3;
        cube.B1 = cube.D1;
        cube.B3 = cube.D3;
        cube.D1 = oldF1;
        cube.D3 = oldF3;
        let oldL1 = cube.L1;
        cube.L1 = cube.L3;
        cube.L3 = cube.L4;
        cube.L4 = cube.L2;
        cube.L2 = oldL1;
        moveStack.push("L");
        }
    function LP() {
        let oldF1 = cube.F1;
        let oldF3 = cube.F3;
        cube.F1 = cube.D1;
        cube.F3 = cube.D3;
        cube.D1 = cube.B1;
        cube.D3 = cube.B3;
        cube.B1 = cube.U1;
        cube.B3 = cube.U3;
        cube.U1 = oldF1;
        cube.U3 = oldF3;
        let oldL1 = cube.L1;
        cube.L1 = cube.L2;
        cube.L2 = cube.L4;
        cube.L4 = cube.L3;
        cube.L3 = oldL1;
        moveStack.push("LP");
        }
      function U() {
        let oldF1 = cube.F1;
        let oldF2 = cube.F2;
        cube.F1 = cube.R1;
        cube.F2 = cube.R2;
        cube.R1 = cube.B4;
        cube.R2 = cube.B3;
        cube.B4 = cube.L1;
        cube.B3 = cube.L2;
        cube.L1 = oldF1;
        cube.L2 = oldF2;
        let oldU1 = cube.U1;
        cube.U1 = cube.U3;
        cube.U3 = cube.U4;
        cube.U4 = cube.U2;
        cube.U2 = oldU1;
        moveStack.push("U");
        }
        function UP() {
          let oldF1 = cube.F1;
          let oldF2 = cube.F2;
          cube.F1 = cube.L1;
          cube.F2 = cube.L2;
          cube.L1 = cube.B4;
          cube.L2 = cube.B3;
          cube.B4 = cube.R1;
          cube.B3 = cube.R2;
          cube.R1 = oldF1;
          cube.R2 = oldF2;
          let oldU1 = cube.U1;
          cube.U1 = cube.U2;
          cube.U2 = cube.U4;
          cube.U4 = cube.U3;
          cube.U3 = oldU1;
          moveStack.push("UP");
          }
        function D() {
          let oldF3 = cube.F3;
          let oldF4 = cube.F4;
          cube.F3 = cube.L3;
          cube.F4 = cube.L4;
          cube.L3 = cube.B2;
          cube.L4 = cube.B1;
          cube.B2 = cube.R3;
          cube.B1 = cube.R4;
          cube.R3 = oldF3;
          cube.R4 = oldF4;
          let oldD1 = cube.D1;
          cube.D1 = cube.D3;
          cube.D3 = cube.D4;
          cube.D4 = cube.D2;
          cube.D2 = oldD1;
          moveStack.push("D");
          }
        function DP() {
          let oldF3 = cube.F3;
          let oldF4 = cube.F4;
          cube.F3 = cube.R3;
          cube.F4 = cube.R4;
          cube.R3 = cube.B2;
          cube.R4 = cube.B1;
          cube.B2 = cube.L3;
          cube.B1 = cube.L4;
          cube.L3 = oldF3;
          cube.L4 = oldF4;
          let oldD1 = cube.D1;
          cube.D1 = cube.D2;
          cube.D2 = cube.D4;
          cube.D4 = cube.D3;
          cube.D3 = oldD1;
          moveStack.push("DP");
          }
          function roUp() {
            R();
            LP();
          }
          function roDown() {
            L();
            RP();
          }
          function roLeft() {
            U();
            DP();
          }
          function roRight() {
            D();
            UP();
          }          

          function RURPUP() {
            R();
            U();
            RP();
            UP();
          }
          function LPUPLU() {
            LP();
            UP();
            L();
            U();
          }
          function URUPLPURPUPLP(){
            U();
            R();
            UP();
            LP();
            U();
            RP();
            UP()
            L();
          }
          function resetCube(){
            cube = JSON.parse(JSON.stringify(solvedCube));
          }                                                                            
  function drawCube() {
    document.getElementById("U1").innerHTML ="<div id=" + cube.U1 +"C>" + cube.U1 + "</div>";
    document.getElementById("U2").innerHTML ="<div id=" + cube.U2 +"C>" + cube.U2 + "</div>";
    document.getElementById("U3").innerHTML ="<div id=" + cube.U3 +"C>" + cube.U3 + "</div>";
    document.getElementById("U4").innerHTML ="<div id=" + cube.U4 +"C>" + cube.U4 + "</div>";
    document.getElementById("L1").innerHTML ="<div id=" + cube.L1 +"C>" + cube.L1 + "</div>";
    document.getElementById("L2").innerHTML ="<div id=" + cube.L2 +"C>" + cube.L2 + "</div>";
    document.getElementById("L3").innerHTML ="<div id=" + cube.L3 +"C>" + cube.L3 + "</div>";
    document.getElementById("L4").innerHTML ="<div id=" + cube.L4 +"C>" + cube.L4 + "</div>";
    document.getElementById("F1").innerHTML ="<div id=" + cube.F1 +"C>" + cube.F1 + "</div>";
    document.getElementById("F2").innerHTML ="<div id=" + cube.F2 +"C>" + cube.F2 + "</div>";
    document.getElementById("F3").innerHTML ="<div id=" + cube.F3 +"C>" + cube.F3 + "</div>";
    document.getElementById("F4").innerHTML ="<div id=" + cube.F4 +"C>" + cube.F4 + "</div>";
    document.getElementById("R1").innerHTML ="<div id=" + cube.R1 +"C>" + cube.R1 + "</div>";
    document.getElementById("R2").innerHTML ="<div id=" + cube.R2 +"C>" + cube.R2 + "</div>";
    document.getElementById("R3").innerHTML ="<div id=" + cube.R3 +"C>" + cube.R3 + "</div>";
    document.getElementById("R4").innerHTML ="<div id=" + cube.R4 +"C>" + cube.R4 + "</div>";
    document.getElementById("B1").innerHTML ="<div id=" + cube.B1 +"C>" + cube.B1 + "</div>";
    document.getElementById("B2").innerHTML ="<div id=" + cube.B2 +"C>" + cube.B2 + "</div>";
    document.getElementById("B3").innerHTML ="<div id=" + cube.B3 +"C>" + cube.B3 + "</div>";
    document.getElementById("B4").innerHTML ="<div id=" + cube.B4 +"C>" + cube.B4 + "</div>";
    document.getElementById("D1").innerHTML ="<div id=" + cube.D1 +"C>" + cube.D1 + "</div>";
    document.getElementById("D2").innerHTML ="<div id=" + cube.D2 +"C>" + cube.D2 + "</div>";
    document.getElementById("D3").innerHTML ="<div id=" + cube.D3 +"C>" + cube.D3 + "</div>";
    document.getElementById("D4").innerHTML ="<div id=" + cube.D4 +"C>" + cube.D4 + "</div>";
    document.getElementById("moveStack").innerHTML ="MoveList:"+ moveStack.toString();
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  
 async function runInput() {

  let moves = document.getElementById("MovesToApply").value.split(",");
  let slowMode = false;

  for (const element of moves) {
    if(slowMode == true){await sleep(600);}    
    switch(element){
      case "R":
        R();
        break;
      case "RP":
        RP();
        break;
      case "L":
        L();
        break;
      case "LP":
        LP();
        break;
      case "U":
        U();
        break;
      case "UP":
        UP();
        break;
      case "D":
        D();
        break;
      case "DP":
        DP();
        break;
        case "SLOW":
          slowMode = true;
          break;                                            
    }
    drawCube();

  }
}

function solveCube(){
  if(cube.D1 != "W1")(solveD1("W1"));
  if(cube.D2 != "W2")(solveD2("W2"));
  if(cube.D4 != "W4")(solveD4("W4"));
  if(cube.D3 != "W3")(solveD3("W3"));
  if(!(cube.U1 =="Y1" && cube.U2 =="Y2" && cube.U3 =="Y3" && cube.U4 =="Y4"))
  {solveTop();}
 }
 function solveTop(){
   alignCorners();
   alignLabels();
 }
 function alignLabels(){
  roUp();
  roUp();
  let dCount=4;
  while(dCount >0)
  {
    dCount--;
    alignLabelD2()
    D();
  }
 }
 function alignLabelD2(){
  if(!cube.D2.startsWith("Y")){
    let roLabelCount = 6;
    while(roLabelCount >0  && !cube.D2.startsWith("Y"))
    {
      roLabelCount--;
      RURPUP();
    }
  }
 }
 function alignCorners(){
  let loopCount =10; 
  while(countCorners()!=4 && loopCount >0)
  {
    loopCount--;
    switch (countCorners()) {
      case 1:
       rotateY4IntoU3();
       URUPLPURPUPLP();  
        break;
     case 2:
       U();
       U();
       URUPLPURPUPLP();      
       break;         
     default:
       break;
    }
   rotateY4IntoU3();
   countCorners();
  }
 }
 function rotateY4IntoU3()
 {
   let maxRotate=4;
   while(maxRotate > 0 && !inGRW("Y4")){
    maxRotate--;
    U();
    }   
 }
 function countCorners(){
   let count= 0;
  if(inGRW("Y4")){count++;}
  if(inGOW("Y3")){count++;}
  if(inBOW("Y1")){count++;}
  if(inBRW("Y2")){count++;}
  return count;

 }
 function solveD1(label)
 {
   //if not in bottom, flip cube
  if(!inBottom(label))
  {
    roUp();
    roUp();
  }
  //if not in GOY, rotate right
  let maxRotate = 3
  while(!inGOY(label) && maxRotate >0)
  {
    roRight();
    maxRotate--;
  }
  //if W1 not in D1 then LPUPLU until it is
  let maxLHA = 4
  while(!(cube.D1==label) && maxLHA >0)
  {
    LPUPLU();
    maxLHA--;
  }  
 }
 function solveD2(label)
 {
  if(inBOY(label)){L();U();LP();}
  if(inBRY(label)){R();R();}
  //no need to check for inGRY because it is handled later
  
  let roCount=3;
  while (roCount >0 && !inGRW(label))
  {
    U();
    roCount--;
  }
  let rotateCount=5;
  while (rotateCount >0 && cube.D2!==label)
  {
    RURPUP();
    rotateCount--;
  }  
 }
function solveD4(label)
{
  roLeft();
  if(!inBottom(label) && !inGRW(label))
  {
    let roCount=3;
    while (roCount >0 && !inGRW(label))
    {
      U();
      roCount--;
    }    
  }
  if(inGRY(label) || inGRW(label))
  {
    let rotateCount=5;
    while (rotateCount >0 && cube.D2!==label)
    {
      RURPUP();
      rotateCount--;
    } 
  }
  roRight();

}
function solveD3(label)
{
  roLeft();
  roLeft();
  //this can be refactored, since it is almost the same code for D2,D3,D4
  if(!inBottom(label) && !inGRW(label))
  {
    let roCount=3;
    while (roCount >0 && !inGRW(label))
    {
      U();
      roCount--;
    }    
  }
  if(inGRY(label) || inGRW(label))
  {
    let rotateCount=5;
    while (rotateCount >0 && cube.D2!==label)
    {
      RURPUP();
      rotateCount--;
    } 
  }
  roRight();
  roRight();


}
 function inBottom(sticker)
 {
   return inGOY(sticker) || inGRY(sticker) || inBOY(sticker)|| inBRY(sticker);
 }
 function inGOY(label) {
  switch(label){
    case cube.L4:
      return true;
      break;
    case cube.F3:
      return true;
      break;
    case cube.D1:
      return true;
      break;                         
  }
  return false;
 }
 function inGRY(label) {
  switch(label){
    case cube.F4:
      return true;
      break;
    case cube.D2:
      return true;
      break;
    case cube.R3:
      return true;
      break;                         
  }  
  return false;
 }
 function inBOY(label) {
  switch(label){
    case cube.B1:
      return true;
      break;
    case cube.L3:
      return true;
      break;
    case cube.D3:
      return true;
      break;                         
  }  
  return false;
 }
 function inBRY(label) {
  switch(label){
    case cube.B2:
      return true;
      break;
    case cube.R4:
      return true;
      break;
    case cube.D4:
      return true;
      break;                         
  }  
  return false;
 }
 function inGRW(label) {
  switch(label){
    case cube.F2:
      return true;
      break;
    case cube.R1:
      return true;
      break;
    case cube.U4:
      return true;
      break;                         
  }  
  return false;
 }
 function inBOW(label) {
  switch(label){
    case cube.U1:
      return true;
      break;
    case cube.L1:
      return true;
      break;
    case cube.B3:
      return true;
      break;                         
  }  
  return false;
 }
 function inBRW(label) {
  switch(label){
    case cube.U2:
      return true;
      break;
    case cube.R2:
      return true;
      break;
    case cube.B4:
      return true;
      break;                         
  }  
  return false;
 }
 function inGOW(label) {
  switch(label){
    case cube.F1:
      return true;
      break;
    case cube.L2:
      return true;
      break;
    case cube.U3:
      return true;
      break;                         
  }  
  return false;
 }    
    