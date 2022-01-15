window.onload=function(){
  var start=document.getElementById("start");
  var stop=document.getElementById("stop");
  var hours=document.getElementById("hours");
  var minutes=document.getElementById("minutes");
  var seconds=document.getElementById("seconds");
  s=0;
  m=0;
  h=0
  var interval
  start.onclick=function(){
    interval=setInterval(second,1000)
  }
  stop.onclick=function(){
    clearInterval(interval)
  }
  function second(){
        if(s<=9){
          seconds.innerHTML="0"+s
        }
        s++
        if(s>9 && s<60){
          seconds.innerHTML=`${s}`;
        }
        if(s==60){
          m++
          minutes.innerHTML="0"+m+":"
          s=0
        }
        if(m>9 && m<60){
          minutes.innerHTML=`${m}`+":"
        }
        if(m==60){
          h++
          hours.innerHTML="0"+h+":"
          m=0
        }
        if(h>9 && h<60){
          hours.innerHTML="0"+h+":"
        }
        if(h==60){
          h++
          hours.innerHTML=`${h}`+":"
        }

      }
      second()
}
