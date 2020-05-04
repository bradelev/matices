/* mediaPlayer es un script realizado por Braulio De Leon
** 
** 
** cargarAudio() reproduce audio en html5 y javascript
** cargarVideo() reproduce videos de youtube en html5 y javascript
** http://www.zorzalweb.com
** es libre para su utilizacion
** 
*/

function cargarAudio(idAudio,titulo)
{
	document.getElementById('audioPlayer').innerHTML='<h3>'+titulo+'</h3><audio controls="controls" autoplay="autoplay"><source src="http://www.matices.com.uy/matices/mp3/mp3/'+idAudio+'.mp3" type="audio/mp3"/>Su navegador no soporta audio, actualice a una versi&oacute;n m&aacute;s reciente</audio>';
}

function cargarVideo(idVideo,titulo)
{
	document.getElementById('screen').innerHTML='<h3>'+titulo+'</h3><iframe class="youtube-player" type="text/html" width="600" height="385" src="http://www.youtube.com/embed/'+idVideo+'?autoplay=1" frameborder="0"></iframe>';
}