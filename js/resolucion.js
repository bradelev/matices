// JavaScript Document
$("body").onLoad(function(numero){
	var ancho = parseInt(screen.width);
	var i = "";
	if (ancho<800){
		i="0800";
	}else{
		 if (ancho<1024){
			 i="1024";
		}else{
			if (ancho<1200){
				i="1200";
			}else{
				i="1600";
			}
		}
	}
	$(this).css("background-image","url(images/fondos/fondo" + numero + i +".jpg);");
}