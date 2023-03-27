//Variaveis para o contador sec=segundos, min=minuto, hr=hora (todas iniciando do "0")
let sec= 0
let min= 0
let hr= 0
//Fim variaveis

//Função contador (id#watch (relogio))
function watch(){  
   sec++// Contagem apartir do zero +1
   if(sec == 60){ //Quando o segundo chegar a 60
      min++ //Acrescente +1 no minuto
      sec=0 // Consequentemente retorne o segundo para o "0", para iniciar uma nova contagem
      if(min ==60){ //Quando o minuto chegar a 60
          min=0 //Retorne o minuto ao "0"
          hr++ //E acrescente +1 na hora.
      } 
      controlMinute();
   }
   //Print do Relogio --> 00:00:00 (esta dentro de uma div)
   document.getElementById('watch').innerText = twodigits(hr)+':'+twodigits(min)+':'+twodigits(sec)
}


//função para o contador manter os dois digitos(00:00:00)
function twodigits(digit){ //Função para informar que o temporizador terá 2 digitos (00:00)
   if(digit <10){
       return('0'+digit)
   }else{
       return(digit)
   }
}
//fim função


//Função do botao iniciar
function iniciar(){   
   watch()//Ao clicar no botao iniciar, chamar função contador de tempo
  interval = setInterval(watch,1000)  //intervalo de tempo do contador  
}
//fim 


//Função 'PARAR' contador de tempo...
function stop(){
   clearInterval(interval)// limpa o intervalo de tempo
   sec=0 //ao clicar em parar segundo voltar ao "0"
   min=0 //ao clicar em parar minuto voltar ao "0"
   document.getElementById('watch').innerText = `` //contador de tempo vai aparecer zerada dessa forma
   msg.innerHTML = `` // msg de conclusão tbm apaga. 
     
}
//fim função parar

//Função para pegar os numeros do select
function controlMinute(){
   let selectMin = document.querySelector('#selectMinute'); //id do select
   let minute = selectMin.options[selectMin.selectedIndex].textContent; //Buscando valores dentro do select
   
   if(min == minute){ 
       let audio = document.querySelector('audio')
       let msg =  document.getElementById('msg')
       stop() 
       audio.play() 
       msg.innerHTML = `<p id="mgsFinal">TEMPO FINALIZADO</p>`
   }
}






