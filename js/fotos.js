// JavaScript Document
var url="http://www.matices.com.uy/matices/info/presentaciones/";
var foto = []; //foto[0] = 2012 ... foto[9] = 2001
var alt = [];
foto[0] = ["20120107gregorio_aznarez",
				"20120119semana_san_fernando",
				"20120205durazno",
				"20120211gregorioaznarez1",
				"20120210pan_de_azucar",
				"20120212cerro_chato",
				"20120212juan_lacaze",
				"20120218san_miguel",
				"20120303tala1",
				"20120402prado1",
				"20120403treintaytres1",
				"20120519asocbancariabsas1",
				"20120519asocbancariabsas2",
				"20120520mataderos1",
				"20120520mataderos2",
				]
foto[1] = ["20110108sangregorio",
				"20110212tranqueras",
				"20110213sabalo",
				"20110219pandeazucar",
				"20110305cerrochato",
				"20110319rocha",
				"20110409lascano",	
				"20110417treintaytres",
				"20110421prado",
				"20110514zitarrosa1",
				"20110514zitarrosa2",
				"20110514zitarrosa3",
				"20110514zitarrosa4",			   
				"20110514zitarrosa5",
				"20110514zitarrosa6",
				"20110604puebloagraciada",
				"20110612maronas",
				"20110702parador33",
				"20111102rio_branco",
				"20111111montes",
				"20111202fiesta_del_inmigrante",
				"20111211nico_perez"]
foto[2] = ["20101126guambia2",
				"20101126guambia1",
				"20101114libertad2",
				"20101114libertad1",
				"20100808noblia",
				"20100731maccio3",
				"20100731maccio2",
				"20100731maccio1",
				"20100729zitarrosa2",
				"20100729zitarrosa1",
				"20100516ecildapaullier1",
				"20100425villarodriguez",
				"20100411lascano5",
				"20100411lascano1",
				"20100401prado2",
				"20100401prado1",
				"20100330treintaytres3",
				"20100330treintaytres2",
				"20100330treintaytres1"]
foto[3] = ["20091202tartamudo",
				"20090808lacolmena",
				"20090412melo",
				"20090410prado",
				"20090223cerrochato"]
foto[4] = ["20081220juanlacaze",
				"20080601guambia3",
				"20080601guambia2",
				"20080601guambia1",
				"20080406lascano",
				"20080322prado",
				"20080209santaclara",
				"20080209durazno",
				"20080204lascanas",
				"20080106colonia"]		
foto[5] = ["20071215lacolmena",
				"20071014fogonesminas3",
				"20071014fogonesminas2",
				"20071014fogonesminas1",
				"200704prado",
				"20070319fiestadelrio",
				"20070209sanfernando"]	
foto[6] = ["20061202zitarrosahombrecomun04",
				"20061202zitarrosahombrecomun03",
				"20061202zitarrosahombrecomun02",
				"20061202zitarrosahombrecomun01",
				"20061112melo",
				"20061008lavalleja",
				"20060715teatroespana2",
				"20060715teatroespana1",
				"200604montevideofolclore",
				"20060412prado03",
				"20060412prado02",
				"200602saltodeagua",
				"20060224gritodeasencio",
				"20060211yaguaron",
				"20060205",
				"200601sangregorio02",
				"200601sangregorio01"]							   		
foto[7] = [/*"200508sheraton",
				"200507sheraton",*/
				"200506latu",
				"200505lacolmena",
				"200504lacolmena",
				"200503santalucia",
				"200502prado",
				"200501rafaelamor"]	
foto[8] = ["200412bierfest",
				"200411santalucia",
				"200410zitarrosa",
				"200409zitarrosa",
				"200408bsas",
				"200407bsas",
				"200406bsas",
				"200405",
				"200404guambia",
				"200403lascano",
				"200402treintaytres",
				"200401prado"]	
foto[9] = ["200306sheraton",
				"200305lasenaladabsas",
				"200304stella",
				"200303saloncolonial",
				"200302saloncolonial",
				"200301salazitarrosa"]
foto[10] = ["200208santateresa",
				"200207prado",
				"200206fiestadelrio",
				"200205espacioguambia",
				"200204espacioguambia",
				"200203maticesysusraices",
				"200202atlantida",
				"200201cerrochato"]	
foto[11] = ["200107santateresa",
				"200106santateresa",
				"200105shopping",
				"200104shopping",
				"200103prado",
				"200102prado",
				"200101durazno"]					
alt[0] =  ["Gregorio Aznarez",
				"Semana San Fernando",
				"Durazno",
				"Gregorio Aznarez",
				"Pan de Azucar",
				"Cerro Chato",
				"Juan Lacaze",
				"San Miguel",
				"Tala",
				"Criollas del Prado",
				"Festival del Olimar",
				"Teatro de la Asociacion Bancaria, Buenos Aires",
				"Teatro de la Asociacion Bancaria, Buenos Aires",
				"Feria de Mataderos, Buenos Aires",
				"Feria de Mataderos, Buenos Aires"]
alt[1] = ["San Gregorio",
				   "Tranqueras",
				   "Fiesta del Sabalo",
				   "Pan de Azucar",
				   "Cerro Chato",
				   "Rocha",
				   "Lascano",
				   "Treinta y Tres",
				   "Prado",
				   "Sala Zitarrosa",
				   "Sala Zitarrosa",
				   "Sala Zitarrosa",
				   "Sala Zitarrosa",
				   "Sala Zitarrosa",
				   "Sala Zitarrosa",
				   "Pueblo Agraciada",
				   "Maroñas",
				   "Parador 33",
				   "Rio Branco",
				   "Montes",
				   "Fiesta del Inmigrante",
				   "Nico Perez"]				
alt[2] =  ["Espacio Guambia",
				"Espacio Guambia",
				"Libertad",
				"Libertad",
				"Noblia",
				"Teatro Maccio",
				"Teatro Maccio",
				"Teatro Maccio",
				"Sala Zitarrosa",
				"Sala Zitarrosa",
				"Ecilda Paulier",
				"Villa Rodriguez",
				"Lascano",
				"Lascano",
				"Prado",
				"Prado",
				"Treinta y Tres",
				"Treinta y Tres",
				"Treinta y Tres"]
alt[3] =  ["Tartamudo",
				"La Colmena",
				"Melo",
				"Prado",
				"Cerro Chato"]	
alt[4] =  ["Juan Lacaze",
				"Espacio Guambia",
				"Espacio Guambia",
				"Espacio Guambia",
				"Lascano",
				"Prado",
				"Santa Clara del Olimar",
				"Durazno",
				"Las Cañas",
				"Colonia"]	
alt[5] =  ["La Colmena",
				"Fiesta de los fogones",
				"Fiesta de los fogones",
				"Fiesta de los fogones",
				"Prado",
				"Fiesta del Rio",
				"Semna de San Fernando"]		
alt[6] = ["Sala Zitarrosa - Hombre Comun",
				"Sala Zitarrosa - Hombre Comun",
				"Sala Zitarrosa - Hombre Comun",
				"Sala Zitarrosa - Hombre Comun",
				"Melo",
				"Lavalleja",
				"Teatro España",
				"Teatro España",
				"Montevideo Folklore",
				"Prado",
				"Prado",
				"Festival de Salto del Agua",
				"Grito de Asencio",
				"Yaguaron",
				"",
				"San Gregorio",
				"San Gregorio"]	
alt[7] = [/*"Hotel Sheraton",
				"Hotel Sheraton",*/
				"LATU",
				"La Colmena",
				"La Colmena",
				"Santa Lucia",
				"Prado",
				"Rafael Amor en Montevideo"]		
alt[8] = ["Bierfest",
				"Santa Lucia",
				"Sala Zitarrosa",
				"Sala Zitarrosa",
				"Buenos Aires",
				"Buenos Aires",
				"Buenos Aires",
				"",
				"Espacio Guambia",
				"Lascano",
				"Treinta y Tres",
				"Prado"]	
alt[9] = ["Hotel Sheraton",
				"Buenos Aires",
				"Teatro Stella",
				"Salon Colonial",
				"Salon Colonial",
				"Sala Zitarrosa"]
alt[10] = ["Santa Teresa",
				"Prado",
				"Fiesta del Rio",
				"Espacio Guambia",
				"Espacio Guambia",
				"Matices y sus Raices",
				"Atlantida",
				"Cerro Chato"]	
alt[11] = ["Santa Teresa",
				"Santa Teresa",
				"Montevideo Shopping",
				"Montevideo Shopping",
				"Prado",
				"Prado",
				"Festival de Durazno"]		
function prod(anio)
{
	var salida='';
	var indice = parseInt((-1)*(parseInt(anio) - 2012));
	var largo = foto[indice].length;
	salida+="<table border='0'>";
	salida+="<tbody>";
	var i = 0;
	while(i < largo){
		salida+="<tr>";
		var j = 0;
		while ((i<largo) && (j < 2)){
			salida+="<td>";
			salida+="<a href='"+url+foto[indice][i]+".jpg' target='_blank' title='"+alt[indice][i]+"' rel='lightbox-presentaciones'><img src='"+url+foto[indice][i]+"thumb.jpg' border='0' alt='"+alt[indice][i]+"' title='"+alt[indice][i]+"' /></a>"	
			salida+="</td>";
			i++;
			j++;
		}
		salida+="</tr>";
	}
	salida+="</tbody>";
	salida+="</table>";
	return salida;
}
function fotos(anio){
	function loadsb(){
	if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
				jQuery("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
				return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
			});
	} }
		var salida = prod(anio);
		document.getElementById("fotos").innerHTML ="<h3>Fotos a&ntilde;o "+anio+"</h3>"+salida;
		jQuery("#fotos a").slimbox();
}
		
		
		