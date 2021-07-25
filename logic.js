function forequal(){
    elem = document.getElementsByClassName("equal")
    let ans= eval(calc.txt.value)
    elem.innerHTML=" "
    document.calc.txt.value=ans

}

function sin(){

    let ans= eval(calc.txt.value)
    console.log(ans)
    var pi = Math.PI;
    document.calc.txt.value=Math.sin(ans*(pi/180))
    
}
function cos(){

    let ans= eval(calc.txt.value)
    console.log(ans)
    var pi = Math.PI;
    document.calc.txt.value=Math.cos(ans*(pi/180))
    
}
function tan(){

    let ans= parseInt(eval(calc.txt.value))
    console.log(ans)
    var pi = Math.PI;
    if (ans%90==0 && ans/90!=0) {
        document.calc.txt.value= Infinity
    }
    else
        document.calc.txt.value=Math.tan(ans*(pi/180))
    
}
function getsquare(){
    document.calc.txt.value=(Math.pow(document.calc.txt.value,2)) 
}
function cube(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,3);
}
function sqrt2(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,(1/2));
}
function sqrt3(){
    document.calc.txt.value=Math.pow(document.calc.txt.value,1/3);
}
function getpercent(){
    document.calc.txt.value= document.calc.txt.value/100;
}
function BACKSPC(){
    var a=document.calc.txt.value
    document.calc.txt.value=a.substring(0,a.length-1)
}

var pattern = Trianglify({
    width: 600,
    height: 400,
    cell_size: 75,
    variance: 0.75,
    seed: null, 
    x_colors: 'random',
    y_colors: 'match_x',
    palette: colorbrewer, 
    color_space: 'lab',
    color_function: null,
    stroke_width: 1.51,
    points: undefined 
})

document.body.appendChild(pattern.svg())