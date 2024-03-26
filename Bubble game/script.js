
function makeBubble()
{
  var clutter="";
  for(var i=1;i<=126;++i)
  {
    var num=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${num}</div>`
    document.querySelector("#pbtm").innerHTML=clutter;
  }
}

function gameover()
{
  document.querySelector("#pbtm").innerHTML=`<h1>Game Over!! Your Score : ${ans}`
}

var timer=60;
function runTime()
{
  var timeRun=setInterval(()=>
  {
    if(timer>0)
    {
      timer--;
      document.querySelector("#timer").textContent=timer;
    }
    else
    {
      clearInterval(timeRun);
      gameover();
    }

  },1000)
}

var rn=0;
function hitman()
{
   rn=Math.floor(Math.random()*10);
  document.querySelector("#hitman").textContent=rn;
}

var ans=0;
function score()
{
  ans+=10;

}

  document.querySelector("#pbtm").addEventListener("click",((dets)=>
  {
    var nums=Number((dets.target.textContent));
    if(nums===rn)
    {
      score();
      document.querySelector("#score").textContent=ans;
      hitman();
      makeBubble();
    }
    
  }))






makeBubble();
runTime();
hitman();