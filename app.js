let world_selection = [
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,2,1,2,1,2,2,1,2,1,2,2,2,2,1,2],
        [2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2],
        [2,1,2,1,2,2,2,2,1,2,2,1,2,2,2,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,2,2],
        [2,3,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,1,2],
        [2,2,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,2,2],
        [2,2,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,2],
        [2,2,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,1,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,2,2,2,1,2,2,1,2,2,2,2,1,2,1,2],
        [2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2],
        [2,1,2,2,2,2,1,2,1,2,2,1,2,1,2,2,2,2,1,2],
        [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2],
        [2,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,3,2,1,2],
        [2,1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,2,3,1,1,1,1,1,1,1,1,3,2,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,1,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,2],
        [2,1,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2],
        [2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,1,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,2,3,1,1,1,1,1,1,1,1,3,2,1,2,1,2],
        [2,1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1,2],
        [2,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,3,2,1,2],
        [2,1,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2],
        [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2],
        [2,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,3,2,1,2],
        [2,1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1,2],
        [2,1,2,1,2,3,1,1,1,1,1,1,1,1,3,2,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,1,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,2],
        [2,1,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2],
        [2,1,2,1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1,2],
        [2,1,2,1,2,1,2,2,2,1,1,2,2,2,1,2,1,2,1,2],
        [2,1,2,1,2,3,1,1,1,1,1,1,1,1,3,2,1,2,1,2],
        [2,1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,1,2],
        [2,1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,3,2,1,2],
        [2,1,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,2],
        [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [  
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,3,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,3,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,3,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,3,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,3,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2],
        [2,1,2,1,1,1,2,1,3,1,2,3,1,1,2,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2,3,2],
        [2,3,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2],
        [2,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2],
        [2,1,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2],
        [2,2,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2],
        [2,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2],
        [2,3,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2],
        [2,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,1,3,2],
        [2,1,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2],
        [2,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2],
        [2,3,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2],
        [2,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2],
        [2,1,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2],
        [2,2,1,2,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2],
        [2,1,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2],
        [2,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2],
        [2,3,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,3,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,1,2],
        [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,1,2],
        [2,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,1,2],
        [2,1,2,1,2,1,1,1,1,2,2,1,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,2,1,1,2,2,1,2,1,1,1,1,2,1,2,2,1,1,2,2],
        [2,2,2,1,2,2,1,1,1,2,2,1,1,1,2,2,1,2,2,2],
        [2,2,2,1,2,2,1,2,1,1,1,1,2,1,2,2,1,2,2,2],
        [2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2],
        [2,1,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,1,1,2],
        [2,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,1,2],
        [2,1,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,1,2],
        [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,3,2,2,2,3,2,2,2,2,2,2,2,2,3,2,2,2,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ]
];

// let random_world=Math.floor(Math.random()*5)
let world= world_selection[getRandomInt(5)];


let pacman = {
    x:9,
    y:8,
    degree:0
};

let ghost = {
    inky:{
        x:18,
        y:1
    },
    blinky:{
        x:18,
        y:18
    },
    clyde:{
        x:1,
        y:18,
    },
    pinky:{
        x:1,
        y:1
    }
}
let pacmanDiv = document.getElementById('pacman');
let scoreDiv = document.getElementById('score');
let inky = document.getElementById('inky');
let clyde = document.getElementById('clyde');
let pinky = document.getElementById('pinky');
let blinky = document.getElementById('blinky');
let message = document.getElementById('message');
let gameover = false;
let score=0; 

message.addEventListener('click', function(){
    location.reload();
})

document.onkeydown = function(e){
    if(gameover!=true){
        if(e.key==='ArrowLeft' && world[pacman.y][pacman.x-1]!=2){
            pacman.x--;
            pacman.degree=180;
        }else if (e.key==='ArrowRight' && world[pacman.y][pacman.x+1]!=2 ){
            pacman.x++;
            pacman.degree=360;  
        }else if(e.key ==='ArrowUp' && world[pacman.y-1][pacman.x]!=2){
            pacman.y--;
            pacman.degree=270;
        }else if(e.key === 'ArrowDown' && world[pacman.y+1][pacman.x]!=2){
            pacman.y++;
            pacman.degree=90;
        }
    }
    if(world[pacman.y][pacman.x] === 1 ){
        world[pacman.y][pacman.x] = 0 ;
        score +=10;
        displayMap();
        displayScore();  
    }else if(world[pacman.y][pacman.x] === 3){
        world[pacman.y][pacman.x] = 0;
        score +=20;
        displayMap();
        displayScore();   
    }else if(world[pacman.y][pacman.x] === 3){
        world[pacman.y][pacman.x] = 0;
        score +=20;
        displayMap();
        displayScore();   
    } 
    displayPacMan();   
}

function displayMap(){
    let output = '';
    for(let i=0; i<world.length;i++){
        output += "\n<div class='row'>\n"
        for(let j=0; j<world[i].length; j++){
            if(world[i][j]==2){
                output +=`<div class='brick'></div>`;
            }else if(world[i][j]==1){
                output +="<div class='coin'></div>";
            }else if(world[i][j]==0){
                output +="<div class='empty'></div>";
            }else if(world[i][j]==3){
                output +="<div class='cherry'></div>";
            }
        }
        output+="\n</div>"
    }
    document.getElementById('world').innerHTML = output;
}

function displayGhost(name,name2){
    let ghost_name = getName(name);
    
    console.log(ghost_name)

    if(name==='inky'){
        inky.style.left = ghost_name.x*30+"px";
        inky.style.top = ghost_name.y*30+"px"; 
    }else if(name === 'blinky'){
        blinky.style.left = ghost_name.x*30+"px";
        blinky.style.top = ghost_name.y*30+"px"; 
    }else if(name === 'pinky'){
        pinky.style.left = ghost_name.x*30+"px";
        pinky.style.top = ghost_name.y*30+"px"; 
    }else if(name === 'clyde'){
        clyde.style.left = ghost_name.x*30+"px";
        clyde.style.top = ghost_name.y*30+"px"; 
    }
}

function displayPacMan(){
    pacmanDiv.style.left = pacman.x*30+"px";
    pacmanDiv.style.top = pacman.y*30+"px";
    pacmanDiv.style.transform =`rotate(${pacman.degree}deg)`;
}
function displayScore(){
    scoreDiv.innerHTML = 'Score '+score;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function moveGhost(name){
    let random_num = getRandomInt(4);
    let ghost_name = name;
    let pacmanx = pacman.x;
    let pacmany = pacman.y;
    let ghostx = ghost_name.x;
    let ghosty = ghost_name.y;

    //chase mode
    if(pacmanx===ghost_name.x){
            if(pacmany > ghosty && world[ghosty+1][ghostx]!=2){
                ghost_name.y++;
            }else if(pacmany < ghosty && world[ghosty-1][ghostx]!=2){
                ghost_name.y--;
            }

    }else if(pacmany===ghost_name.y){
            if(pacmanx > ghostx && world[ghosty][ghostx+1]!=2){
                ghost_name.x++;
            }else if(pacmanx < ghostx && world[ghosty][ghostx-1]!=2){
                ghost_name.x--;
            }
    }
    //search mode
    if(random_num==0 && world[ghosty][ghostx-1]!=2){
        ghost_name.x--;
    //right
    }else if(random_num==1 && world[ghosty][ghostx+1]!=2 ){
        ghost_name.x++;
    //up
    }else if(random_num==2 && world[ghosty-1][ghostx]!=2){
        ghost_name.y--;
    //down
    }else if(random_num==3 && world[ghosty+1][ghostx]!=2){
        ghost_name.y++;
    }
    // collision pacman x ghost
    if(pacman.x === ghost_name.x && pacman.y === ghost_name.y ){
        displayMessage();
        gameover = true;
    }
    displayGhost();
}

function getName(name){
    let ghost_name = name;

    if(name === 'inky'){
        ghost_name = ghost.inky;
    }else if(name === 'blinky'){
        ghost_name = ghost.blinky;
    }else if(name === 'pinky'){
        ghost_name = ghost.pinky;
    }else if(name === 'clyde'){
        ghost_name = ghost.clyde;
    }
    return ghost_name;
}

displayMap();
displayPacMan();
displayScore();

setInterval(function(){
    if(gameover!=true){
        moveGhost(ghost.inky);
        moveGhost(ghost.clyde);
        moveGhost(ghost.blinky);
        moveGhost(ghost.pinky);
        displayGhost('inky');
        displayGhost('clyde');
        displayGhost('blinky');
        displayGhost('pinky'); 
    }
},100);

function displayMessage(){
    message.style.display='block';
}
