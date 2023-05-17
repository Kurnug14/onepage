document.body.onload = renderField
const xAxis = 15
const yAxis = 15
var start = Math.floor(Math.random()*15)
var yTracker = 0
var xTracker = 5
var score = 0
var position =[]
var pointPost 
var playerPost
var gravity
var chk = 0
var intervalID
var speed = 1000
var acclereation = 1
var avatar="basket.jpg"
document.getElementById('textChallenge').addEventListener("click", challenge)
document.getElementById('textVanilla').addEventListener("click", update)
document.getElementById('basket').addEventListener("click", choiceBasket)
document.getElementById('worm').addEventListener("click", choiceWorm)
document.onkeydown = move
document.getElementById('again').addEventListener("click", reset)

function challenge (){
    acclereation = 2
    update()
}

function choiceBasket () {
    document.getElementById('worm').style.border="none"
    document.getElementById('basket').style.border="10px solid yellow"
    avatar="basket.jpg"
}


function choiceWorm () {
    document.getElementById('basket').style.border="none"
    document.getElementById('worm').style.border="10px solid yellow"
    avatar="worm.jpg"
}
function update(){
    document.getElementById('textStart').innerHTML = ""
    document.getElementById("overlay").style.display = "none"
    intervalID=setInterval(fallFigure, speed)
}

function reset(){
    score = 0
    document.getElementById('score').innerHTML="Score: " + score
    document.getElementById("y"+(yTracker)+"x"+start).className="test"
    yTracker = 0
    document.getElementById("y14x"+start).className="test"
    console.log("reset")
    update()
}

function renderField(){
        var cell 
        var row
        var table
        score = 0
        table = document.createElement('table');
        table.setAttribute('id', 'field')
        table.className="test"
        for (i=0; i<yAxis; i++){
            row = table.insertRow(i);
            row.setAttribute('id', 'y'+i)
            
            for (j=0; j<xAxis; j++){
                cell = row.insertCell(j)
                cell.setAttribute('id', 'y'+i+'x'+j)
            }
    }
        document.getElementById('basket').style.border = "10px solid yellow"
        document.getElementById("fieldLogic").appendChild(table);
        document.getElementById("y0x"+start).className="yellow"
        
}


function fallFigure(){
    chk += 1
    console.log(chk)
    if (yTracker==13&&(pointPost+30)==playerPost){
        document.getElementById("y"+(yTracker)+"x"+start).className="test"
        yTracker=0
        start = Math.floor(Math.random()*15)
        document.getElementById("y"+(yTracker)+"x"+start).className="yellow" 
        score+=5
        document.getElementById('score').innerHTML="Score: " + score
        speed = speed /acclereation
        clearInterval(intervalID)
        update()
    }
    else if (yTracker==14){
        gravity = 0
        yTracker = 0
        document.getElementById("textOver").innerHTML="GAME OVER <br> Score: "+score
        document.getElementById("overlay").style.display = "block"
        document.getElementById("again").innerHTML="Wanna try again?"
        speed = 1000
        clearInterval(intervalID)
    }
    
    else {
        document.getElementById("y"+(yTracker)+"x"+start).className="test"
        document.getElementById("y"+(yTracker+1)+"x"+start).className="yellow"
        pointPost = start+(yTracker*15)
        yTracker+=1
    }
            
}

function move (e){
    let pressed = e.key
    if (pressed=='a'||pressed=='ArrowLeft'&&(xTracker-1)!=-1 ){
        xTracker = xTracker-1
        document.getElementById("y14"+"x"+xTracker).className="red"
        document.getElementById("y14"+"x"+xTracker).style.backgroundImage="url("+avatar+")";
        document.getElementById("y14"+"x"+(xTracker+1)).className="test" 
        document.getElementById("y14"+"x"+(xTracker+1)).style.backgroundImage="none"
        
    }
    else if (pressed=='d'||pressed=='ArrowRight'&&(xTracker+1)!=15){
        xTracker = xTracker+1
        document.getElementById("y14"+"x"+xTracker).className="red"
        document.getElementById("y14"+"x"+xTracker).style.backgroundImage="url("+avatar+")";
        document.getElementById("y14"+"x"+(xTracker-1)).className="test"
        document.getElementById("y14"+"x"+(xTracker-1)).style.backgroundImage="none" 
    }
    playerPost = 210+xTracker
}
