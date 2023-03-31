let sec= 0
let min= 0
let hr= 0

function watch(){  
   sec++
   if(sec == 60){ 
      min++ 
      sec=0 
      if(min ==60){
          min=0 
          hr++ 
      } 
      controlMinute();
   }

   document.getElementById('watch').innerText = twodigits(hr)+':'+twodigits(min)+':'+twodigits(sec)
}



function twodigits(digit){ 
   if(digit <10){
       return('0'+digit)
   }else{
       return(digit)
   }
}

function iniciar(){   
   watch()
  interval = setInterval(watch,1000) 
}

function stop(){
   clearInterval(interval)
   sec=0 
   min=0 
   document.getElementById('watch').innerText = `` 
   msg.innerHTML = `` 
     
}

function controlMinute(){
   let selectMin = document.querySelector('#selectMinute'); 
   let minute = selectMin.options[selectMin.selectedIndex].textContent; 
   
   if(min == minute){ 
       let audio = document.querySelector('audio')
       let msg =  document.getElementById('msg')
       stop() 
       audio.play() 
       msg.innerHTML = `<p id="mgsFinal">TEMPO FINALIZADO</p>`
   }
}






