let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,2,1,1,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,3,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
let pacman = {
    x:1,
    y:1,
    degree:0
};
let pacmanDiv = document.getElementById('pacman');
let score=0; 

function displayMap(){
    let output = '';
    for(let i=0; i<world.length;i++){
        output += "\n<div class='row'>\n"
        for(let j=0; j<world[i].length; j++){
            if(world[i][j]==2){
                output +="<div class='brick'></div>";
            }else if(world[i][j]==1){
                output +="<div class='coin'></div>";
            }else if(world[i][j]==0){
                output +="<div class='empty'></div>"
            }else if(world[i][j]==3){
                output +="<div class='cherry'></div>"
            }
        }
        output+="\n</div>"
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacMan(){
    pacmanDiv.style.left = pacman.x*20+"px";
    pacmanDiv.style.top = pacman.y*20+"px";
    pacmanDiv.style.transform =`rotate(${pacman.degree}deg)`;

}
function displayScore(){
    document.getElementById('score').innerHTML = score;
   
}

displayMap();
displayPacMan();
displayScore();

document.onkeydown = function(e){
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
    } 
    displayPacMan();   
}