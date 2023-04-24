
const score= document.querySelector(".score");
const sartScreen= document.querySelector(".startscreen");
const gameArea= document.querySelector(".gamearea");



sartScreen.addEventListener("click",start);



/*---------keyboard events------------*/ 
var keys={ArrowUp:false,ArrowDown:false,ArrowRight:false,ArrowLeft:false}
document.addEventListener("keydown",Keyd);
document.addEventListener("keyup",Key);

function Keyd(e){
    e.preventDefult;
    keys[e.key]=true;
    console.log(keys);
}

function Key(e){
    e.preventDefult;
    keys[e.key]=false;
    console.log(keys);
}


//let player={x:0,y:0};

/*---------Game play------------*/ 
function gamePlay(){
    if(player.start==true){
        //let car=document.querySelector('.car');
   
        
/*let gameare=gameArea.getBoundingClientRect();
console.log(gameare);*/
        console.log("any");
       /* if(keys.ArrowUp){player.y -='5px'}
        if(keys.ArrowDown){player.y +='5px'}
        if(keys.ArrowRight){player.x +='5px'}
        if(keys.ArrowLeft){player.x -='5px'}*/

        window.requestAnimationFrame(gamePlay); 
    }
   
}



/*--------- Start Game Strat------------*/ 
function start(){
    gameArea.classList.remove("hide");
    sartScreen.classList.add("hide");
    player.start=true;
    window.requestAnimationFrame(gamePlay);
     
    let car=document.createElement("div");
    car.setAttribute("class", "car");
    car.innerHTML="i am yopur car";
    gameArea.appendChild(car);

   /*player.y=car.offsetTop;
   player.x=car.offsetLeft;
    console.log("top :"+car.offsetTop);
    console.log("left :"+car.offsetLeft);*/

        

    
    /*========================================================*/ 
 

}
/*============ Line move section & gamearea===============*/
for(x=0; x<5; x++){
    let road=document.createElement('div');
    road.setAttribute('class','lines');
    road.y=(x*150)+ "px";
    road.style.top=(x*150)+ "px";
    gameArea.appendChild(road);
    }

/*function moveline(){
    let lines=document.querySelector('.lines');
    lines.forEach(function(items){
            items.y +=5+'px';
            items.style.top=items.y +'px';
    })

}

moveline();*/


/*============ Car move section & gamearea===============*/ 
let car=document.querySelector('.car');
let move=6;

window.addEventListener('load',()=>{
   
    car.style.bottom=0;
    car.style.left=0;
});


window.addEventListener('keydown',(e)=>{
   switch(e.key){
    case 'ArrowLeft':
        car.style.left=parseInt(car.style.left)-move +'px';
        break;

        case 'ArrowRight':
           car.style.left=parseInt(car.style.left)+move +'px';
            break;

            case 'ArrowUp':
                car.style.bottom=parseInt(car.style.bottom)+move +'px';
                break;

                case 'ArrowDown':
                    car.style.bottom=parseInt(car.style.bottom)-move +'px';
                    break;
   }

});



