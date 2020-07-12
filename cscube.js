var cube = {              U1:"B1",U2:"B2",
                          U3:"B3",U4:"B4",
            L1:"O1",L2:"O2",F1:"W1",F2:"W2",R1:"R1",R2:"R2",
            L3:"O3",L4:"O4",F3:"W3",F4:"W4",R3:"R3",R4:"R4",
                          D1:"G1",D2:"G2",
                          D3:"G3",D4:"G4",
            B1:"Y1",B2:"Y2",
            B3:"Y3",B4:"Y4"
        };
  function drawCubeR() {
            var oldF2 = cube.F2;
            var oldF4 = cube.F4;
            cube.F2 = cube.D2;
            cube.F4 = cube.D4;
            cube.D2 = cube.B2;
            cube.D4 = cube.B4;
            cube.B2 = cube.U2;
            cube.B4 = cube.U4;
            cube.U2 = oldF2;
            cube.U4 = oldF4;
            var oldR1 = cube.R1;
            cube.R1 = cube.R3;
            cube.R3 = cube.R4;
            cube.R4 = cube.R2;
            cube.R2 = oldR1;
            drawCube();
            }
  function drawCubeRP() {
            var oldF2 = cube.F2;
            var oldF4 = cube.F4;
            cube.F2 = cube.U2;
            cube.F4 = cube.U4;
            cube.U2 = cube.B2;
            cube.U4 = cube.B4;
            cube.B2 = cube.D2;
            cube.B4 = cube.D4;
            cube.D2 = oldF2;
            cube.D4 = oldF4;            
            var oldR1 = cube.R1;
            cube.R1 = cube.R2;
            cube.R2 = cube.R4;
            cube.R4 = cube.R3;
            cube.R3 = oldR1;
            drawCube();
            }
    function drawCubeL() {
        var oldF1 = cube.F1;
        var oldF3 = cube.F3;
        cube.F1 = cube.U1;
        cube.F3 = cube.U3;
        cube.U1 = cube.B1;
        cube.U3 = cube.B3;
        cube.B1 = cube.D1;
        cube.B3 = cube.D3;
        cube.D1 = oldF1;
        cube.D3 = oldF3;
        var oldL1 = cube.L1;
        cube.L1 = cube.L3;
        cube.L3 = cube.L4;
        cube.L4 = cube.L2;
        cube.L2 = oldL1;
        drawCube();
        }
    function drawCubeLP() {
        var oldF1 = cube.F1;
        var oldF3 = cube.F3;
        cube.F1 = cube.B1;
        cube.F3 = cube.B3;
        cube.B1 = cube.B1;
        cube.B3 = cube.B3;
        cube.B1 = cube.U1;
        cube.B3 = cube.U3;
        cube.U1 = oldF1;
        cube.U3 = oldF3;
        var oldL1 = cube.L1;
        cube.L1 = cube.L2;
        cube.L2 = cube.L4;
        cube.L4 = cube.L3;
        cube.L3 = oldL1;
        drawCube();
        }                                                   
  function drawCube() {
    document.getElementById("U1").innerHTML = "<div id=" + cube.U1 +"C>" + cube.U1 + "</div>";
    document.getElementById("U2").innerHTML ="<div id=" + cube.U2 +"C>" + cubez.U2 + "</div>";
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
  }
 