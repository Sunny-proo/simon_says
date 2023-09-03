let gameseq=[];
let userseq=[];
let start=false;
let btns=["red","yellow","blue","green"];
highscore=0;
tevel=0;
let strt=document.querySelector("#strt");
strt.addEventListener("click", function(){
    if(start==false){
        alert(`game started`);
        start=true;
        levelup();
    }
    
});
let h2=document.querySelector("h3");
document.addEventListener("keypress",function() {
    
    if(start==false){
        alert(`game started`);
        start=true;
        levelup();
    }
    
 
});
function btnflash(butn){
butn.classList.add("flash");
setTimeout(function(){
butn.classList.remove("flash");},250);
}
function levelup(){
    userseq=[];
    tevel++;
    h2.innerText=`Level ${tevel}`;
let idx=Math.floor(Math.random()*3);
rclr=btns[idx];
gameseq.push(rclr);
let rbtn=document.querySelector(`.${rclr}`);
    btnflash(rbtn);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
 let btn=this;
 btnflash(btn);
 userclr=btn.getAttribute("id");
 userseq.push(userclr);
 check(userseq.length-1);
}
function check(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    
    else{ 
        if(highscore<tevel){
            highscore=tevel;
        }

        h2.innerText=`game over! your score is ${tevel};
        highscore is ${highscore}`
        let body=document.querySelector('body');
        body.style.backgroundColor="RED";
        setTimeout(function(){
            body.style.backgroundColor="WHITE";
        },250)
        start=false;
        tevel=0;
        userseq=[];
        gameseq=[];
}    
}
