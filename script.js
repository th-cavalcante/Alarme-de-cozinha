let sec=0,min=0,hr=0;function watch(){sec++,60==sec&&(min++,sec=0,60==min&&(min=0,hr++),controlMinute()),document.getElementById("watch").innerText=twodigits(hr)+":"+twodigits(min)+":"+twodigits(sec)}function twodigits(a){return 10>a?"0"+a:a}function iniciar(){watch(),interval=setInterval(watch,1e3)}function stop(){clearInterval(interval),sec=0,min=0,document.getElementById("watch").innerText=``,msg.innerHTML=``}function controlMinute(){let a=document.querySelector("#selectMinute"),b=a.options[a.selectedIndex].textContent;if(min==b){let a=document.querySelector("audio"),b=document.getElementById("msg");stop(),a.play(),b.innerHTML=`<p id="mgsFinal">TEMPO FINALIZADO</p>`}}





