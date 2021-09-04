$(document).ready(function(){
	var rand;
var colors;

	$("#divGeneral").css({
      "height":"600px",
      "width":"720px",
      "border":"1px solid black",
    });

//var cuadritos = $("<div class='cuadritos'></div>");
			
	$("#btnGenerar").click(function(){
		 
		//$("<div class='cuadritos'></div>").appendTo("#divGeneral");
		$("#divGeneral").append("<div class='cuadritos'></div>");

		//$("#divGeneral").append(cuadritos);
		colors = ["#00FFFF","#FF00FF","#3ADF00", "#FF8000", "#FF0040"];
			rand = Math.floor(Math.random()*colors.length);
			$(".cuadritos").css({
		      "height":"70px",
		      "width":"70px",
		      "border":"1px solid black",
		      "background":colors[rand],
		      "opacity":"0.7",
		      "border-radius": "10px",
		      "display": "inline-block"
		});

		//$(".cuadritos").draggable();

		$('.cuadritos').draggable( {
		    containment: '#divGeneral',
		    cursor: 'move',
		    snap: '#divGeneral'
		 });	
	});
});

